// Pinnacle Audit: builds the report on the server so the Anthropic API key stays private.
// Needs the ANTHROPIC_API_KEY environment variable set in Vercel.

const MODEL = 'claude-haiku-5-5';

function clip(v, max) {
  return String(v == null ? 'unspecified' : v).slice(0, max);
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Use POST' });
    return;
  }
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    res.status(500).json({ error: 'Server is missing ANTHROPIC_API_KEY' });
    return;
  }

  let b = req.body || {};
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }

  const prompt = `You are an AI business consultant specializing in small business automation. A business owner just completed an audit. Based on their answers, produce a personalized AI Opportunity Report.

Business details:
- Industry: ${clip(b.industry, 120)}
- Team size: ${clip(b.size, 80)}
- Biggest time drain: ${clip(b.timeDrain, 120)}
- Current software: ${clip(b.software, 120)}
- Current AI use: ${clip(b.aiUse, 120)}
- Biggest pain point: ${clip(b.pain, 600)}
- Monthly revenue: ${clip(b.revenue, 80)}

Respond ONLY with a JSON object in this exact format, no markdown, no backticks, no extra text:
{
  "headline": "short punchy headline about their biggest opportunity (max 10 words)",
  "summary": "2 sentence summary of their situation and what's possible",
  "opportunities": [
    {
      "icon": "emoji",
      "title": "opportunity title",
      "description": "1-2 sentences on what to automate and how",
      "tool": "specific tool name to use (e.g. ChatGPT, Jobber AI, Zapier)",
      "saving": "estimated hours saved per week e.g. Save 3-4 hrs/week"
    }
  ],
  "quickWin": "The single most important first step they should take this week, in plain English"
}

Give exactly 3 opportunities, ordered from quickest win to longer term. Be specific to their industry and pain points. Keep language simple and direct, no jargon.`;

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({ model: MODEL, max_tokens: 1200, messages: [{ role: 'user', content: prompt }] })
    });
    const data = await r.json();
    if (!r.ok) {
      console.error('Anthropic error', r.status, JSON.stringify(data).slice(0, 500));
      res.status(502).json({ error: 'AI request failed' });
      return;
    }
    const text = (data.content || []).map(c => c.text || '').join('');
    const clean = text.replace(/```json|```/g, '').trim();
    const jsonStart = clean.indexOf('{');
    const jsonEnd = clean.lastIndexOf('}');
    const report = JSON.parse(clean.slice(jsonStart, jsonEnd + 1));
    res.status(200).json(report);
  } catch (err) {
    console.error('Audit failed', err);
    res.status(500).json({ error: 'Could not build report' });
  }
};
