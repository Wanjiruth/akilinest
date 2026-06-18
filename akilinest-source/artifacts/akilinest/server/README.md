Server for sending contact form submissions to WhatsApp or Twilio

Quick setup

1. cd server
2. npm install
3. Copy `.env.example` to `.env` and fill values
4. Start: `npm start`

Configuration
- To use Meta's WhatsApp Cloud API set `WA_PROVIDER=whatsapp_cloud`, provide `WA_PHONE_NUMBER_ID`, `WA_ACCESS_TOKEN`, and `NOTIFY_TO` (your phone in international format without `+`).
- To use Twilio set `WA_PROVIDER=twilio` and provide `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_WHATSAPP_FROM` and `NOTIFY_TO`.

Frontend
- Set `VITE_API_URL` in your Vite `.env` (or `.env.local`) to the server endpoint, e.g.: `VITE_API_URL=http://localhost:3001/api/contact`.
