const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const NOTIFY_TO = process.env.NOTIFY_TO || '254702820845';
const PROVIDER = process.env.WA_PROVIDER || 'whatsapp_cloud';

app.post('/api/contact', async (req, res) => {
  const { name, email, stage, interest, message } = req.body || {};
  const text = `New contact from website\nName: ${name || '-'}\nEmail: ${email || '-'}\nStage: ${stage || '-'}\nInterest: ${interest || '-'}\nMessage: ${message || '-'} `;
  try {
    if (PROVIDER === 'twilio') {
      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      if (!accountSid || !authToken) return res.status(500).json({ error: 'twilio_not_configured' });
      const client = require('twilio')(accountSid, authToken);
      await client.messages.create({
        from: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`,
        to: `whatsapp:+${NOTIFY_TO}`,
        body: text,
      });
      return res.json({ ok: true });
    }

    // Default: WhatsApp Cloud API
    const phoneNumberId = process.env.WA_PHONE_NUMBER_ID;
    const accessToken = process.env.WA_ACCESS_TOKEN;
    if (!phoneNumberId || !accessToken) return res.status(500).json({ error: 'wa_not_configured' });

    const resp = await fetch(`https://graph.facebook.com/v17.0/${phoneNumberId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: NOTIFY_TO,
        type: 'text',
        text: { body: text }
      })
    });

    if (!resp.ok) {
      const body = await resp.text();
      console.error('WA error', resp.status, body);
      return res.status(500).json({ error: 'wa_send_failed', detail: body });
    }

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'send_failed', detail: err.message });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('Contact sender listening on', port));
