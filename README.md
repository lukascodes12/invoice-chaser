[index.html](https://github.com/user-attachments/files/28075537/index.html)
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Invoice Chaser – Get Paid Faster</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f5f5; color: #1a1a1a; min-height: 100vh; }
    header { background: #fff; border-bottom: 1px solid #e5e5e5; padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; }
    header h1 { font-size: 1.2rem; font-weight: 600; }
    header span { font-size: 13px; color: #666; }
    .hero { background: #fff; border-bottom: 1px solid #e5e5e5; padding: 2.5rem 2rem; text-align: center; }
    .hero h2 { font-size: 1.8rem; font-weight: 700; margin-bottom: 0.5rem; }
    .hero p { color: #555; font-size: 1rem; max-width: 480px; margin: 0 auto; }
    .container { max-width: 680px; margin: 2rem auto; padding: 0 1rem; }
    .card { background: #fff; border: 1px solid #e5e5e5; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; }
    .card h3 { font-size: 1rem; font-weight: 600; margin-bottom: 1.25rem; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .field { display: flex; flex-direction: column; gap: 5px; margin-bottom: 12px; }
    .field label { font-size: 13px; color: #555; font-weight: 500; }
    .field input { padding: 9px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; outline: none; transition: border 0.15s; }
    .field input:focus { border-color: #555; }
    .btn-generate { width: 100%; padding: 12px; font-size: 15px; font-weight: 600; background: #1a1a1a; color: #fff; border: none; border-radius: 8px; cursor: pointer; margin-top: 4px; transition: background 0.15s; }
    .btn-generate:hover { background: #333; }
    .btn-generate:disabled { background: #999; cursor: not-allowed; }
    .tabs { display: flex; gap: 8px; margin-bottom: 1rem; }
    .tab { padding: 7px 16px; border-radius: 8px; border: 1px solid #ddd; background: #f5f5f5; font-size: 13px; cursor: pointer; color: #555; transition: all 0.15s; }
    .tab.active { background: #1a1a1a; color: #fff; border-color: #1a1a1a; font-weight: 500; }
    .badge { display: inline-block; font-size: 11px; padding: 3px 10px; border-radius: 20px; margin-bottom: 10px; font-weight: 500; }
    .badge.friendly { background: #e6f4ea; color: #2d6a3f; }
    .badge.firm { background: #fff3e0; color: #b45309; }
    .badge.final { background: #fde8e8; color: #b91c1c; }
    .email-subject { font-size: 12px; color: #777; padding-bottom: 10px; border-bottom: 1px solid #eee; margin-bottom: 10px; }
    .email-body { background: #f9f9f9; border-radius: 8px; padding: 1rem; font-size: 13.5px; line-height: 1.75; color: #1a1a1a; white-space: pre-wrap; min-height: 180px; }
    .btn-copy { margin-top: 10px; padding: 7px 16px; font-size: 13px; border: 1px solid #ddd; border-radius: 8px; background: #fff; cursor: pointer; transition: background 0.15s; }
    .btn-copy:hover { background: #f5f5f5; }
    .hidden { display: none; }
    .loading { text-align: center; padding: 2rem; color: #777; font-size: 14px; }
    .spinner { display: inline-block; width: 18px; height: 18px; border: 2px solid #ddd; border-top-color: #555; border-radius: 50%; animation: spin 0.8s linear infinite; margin-right: 8px; vertical-align: middle; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .error { color: #b91c1c; font-size: 13px; padding: 0.75rem; background: #fde8e8; border-radius: 8px; margin-top: 8px; }
    footer { text-align: center; padding: 2rem; font-size: 12px; color: #aaa; }
    @media (max-width: 520px) { .grid { grid-template-columns: 1fr; } .hero h2 { font-size: 1.4rem; } }
  </style>
</head>
<body>

<header>
  <h1>📬 Invoice Chaser</h1>
  <span>Stop chasing. Start getting paid.</span>
</header>

<div class="hero">
  <h2>Get your invoices paid — fast</h2>
  <p>Fill in your invoice details and we'll instantly generate a professional 3-email follow-up sequence for you.</p>
</div>

<div class="container">
  <div class="card">
    <h3>Invoice details</h3>
    <div class="grid">
      <div class="field">
        <label for="clientName">Client name</label>
        <input type="text" id="clientName" placeholder="e.g. John Smith" />
      </div>
      <div class="field">
        <label for="clientEmail">Client email</label>
        <input type="email" id="clientEmail" placeholder="e.g. john@email.com" />
      </div>
    </div>
    <div class="grid">
      <div class="field">
        <label for="businessName">Your business name</label>
        <input type="text" id="businessName" placeholder="e.g. Apex Plumbing" />
      </div>
      <div class="field">
        <label for="yourName">Your name</label>
        <input type="text" id="yourName" placeholder="e.g. Mike Torres" />
      </div>
    </div>
    <div class="grid">
      <div class="field">
        <label for="invoiceNum">Invoice number</label>
        <input type="text" id="invoiceNum" placeholder="e.g. INV-042" />
      </div>
      <div class="field">
        <label for="amount">Amount owed</label>
        <input type="text" id="amount" placeholder="e.g. $1,250.00" />
      </div>
    </div>
    <div class="grid">
      <div class="field">
        <label for="dueDate">Original due date</label>
        <input type="text" id="dueDate" placeholder="e.g. May 1, 2026" />
      </div>
      <div class="field">
        <label for="payMethod">Payment method</label>
        <input type="text" id="payMethod" placeholder="e.g. e-Transfer, PayPal" />
      </div>
    </div>
    <button class="btn-generate" onclick="generateEmails()">Generate my email sequence →</button>
    <div id="errorMsg" class="error hidden"></div>
  </div>

  <div id="resultsSection" class="hidden">
    <div class="card">
      <h3>Your 3-email sequence</h3>
      <div class="tabs">
        <button class="tab active" onclick="showTab(0, this)">Email 1</button>
        <button class="tab" onclick="showTab(1, this)">Email 2</button>
        <button class="tab" onclick="showTab(2, this)">Email 3</button>
      </div>

      <div id="loadingState" class="loading hidden">
        <span class="spinner"></span> Generating your emails...
      </div>

      <div id="emailContent">
        <div id="tab0">
          <span class="badge friendly">Friendly reminder · 7 days overdue</span>
          <div class="email-subject" id="subject0"></div>
          <div class="email-body" id="body0"></div>
          <button class="btn-copy" onclick="copyEmail(0)">Copy email</button>
        </div>
        <div id="tab1" class="hidden">
          <span class="badge firm">Firm follow-up · 14 days overdue</span>
          <div class="email-subject" id="subject1"></div>
          <div class="email-body" id="body1"></div>
          <button class="btn-copy" onclick="copyEmail(1)">Copy email</button>
        </div>
        <div id="tab2" class="hidden">
          <span class="badge final">Final notice · 30 days overdue</span>
          <div class="email-subject" id="subject2"></div>
          <div class="email-body" id="body2"></div>
          <button class="btn-copy" onclick="copyEmail(2)">Copy email</button>
        </div>
      </div>
    </div>
  </div>
</div>

<footer>Invoice Chaser &copy; 2026</footer>

<script>
  let emails = [];

  function showTab(index, btn) {
    [0,1,2].forEach(i => {
      document.getElementById('tab' + i).classList.toggle('hidden', i !== index);
    });
    document.querySelectorAll('.tab').forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
  }

  function showError(msg) {
    const el = document.getElementById('errorMsg');
    el.textContent = msg;
    el.classList.remove('hidden');
  }

  function hideError() {
    document.getElementById('errorMsg').classList.add('hidden');
  }

  async function generateEmails() {
    hideError();
    const clientName = document.getElementById('clientName').value.trim();
    const clientEmail = document.getElementById('clientEmail').value.trim();
    const businessName = document.getElementById('businessName').value.trim();
    const invoiceNum = document.getElementById('invoiceNum').value.trim();
    const amount = document.getElementById('amount').value.trim();
    const dueDate = document.getElementById('dueDate').value.trim();
    const payMethod = document.getElementById('payMethod').value.trim();
    const yourName = document.getElementById('yourName').value.trim();

    if (!clientName || !amount || !invoiceNum) {
      showError('Please fill in at least the client name, invoice number, and amount.');
      return;
    }

    document.querySelector('.btn-generate').disabled = true;
    document.getElementById('resultsSection').classList.remove('hidden');
    document.getElementById('loadingState').classList.remove('hidden');
    document.getElementById('emailContent').classList.add('hidden');

    const prompt = `Generate a professional 3-email invoice chasing sequence for a small business. Return ONLY valid JSON, no markdown, no explanation. Use this exact structure:

{"emails":[{"subject":"...","body":"..."},{"subject":"...","body":"..."},{"subject":"...","body":"..."}]}

Details:
- Client name: ${clientName}
- Client email: ${clientEmail || 'not provided'}
- Business name: ${businessName || 'our business'}
- Invoice number: ${invoiceNum}
- Amount owed: ${amount}
- Original due date: ${dueDate || 'recently'}
- Payment method: ${payMethod || 'bank transfer or e-Transfer'}
- Sender name: ${yourName || 'the business owner'}

Email 1: Friendly reminder, 7 days overdue. Warm tone, assume good faith, include payment details.
Email 2: Firm follow-up, 14 days overdue. Polite but direct, ask for confirmation of payment date.
Email 3: Final notice, 30 days overdue. Professional but serious, mention potential late fees and next steps.

Each email body should be 80-120 words, professional, and ready to send.`;

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{ role: 'user', content: prompt }]
        })
      });

      const data = await response.json();
      const text = data.content.map(b => b.text || '').join('');
      const clean = text.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(clean);
      emails = parsed.emails;

      [0,1,2].forEach(i => {
        document.getElementById('subject' + i).textContent = 'Subject: ' + emails[i].subject;
        document.getElementById('body' + i).textContent = emails[i].body;
      });

      document.getElementById('loadingState').classList.add('hidden');
      document.getElementById('emailContent').classList.remove('hidden');
      showTab(0, document.querySelectorAll('.tab')[0]);

    } catch(err) {
      document.getElementById('loadingState').classList.add('hidden');
      document.getElementById('resultsSection').classList.add('hidden');
      showError('Something went wrong. Please try again.');
    }

    document.querySelector('.btn-generate').disabled = false;
  }

  function copyEmail(index) {
    const subject = document.getElementById('subject' + index).textContent;
    const body = document.getElementById('body' + index).textContent;
    navigator.clipboard.writeText(subject + '\n\n' + body);
    const btns = document.querySelectorAll('.btn-copy');
    btns[index].textContent = 'Copied!';
    setTimeout(() => { btns[index].textContent = 'Copy email'; }, 2000);
  }
</script>
</body>
</html>
