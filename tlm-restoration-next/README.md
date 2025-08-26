# TLM Restoration — Next.js + Tailwind

This is a ready-to-deploy Next.js site for **TLM Restoration**.

## Local Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Configure reCAPTCHA
Edit `app/page.jsx` and replace `YOUR_RECAPTCHA_SITE_KEY` with your v2 Checkbox site key.
(Also add your domain in the reCAPTCHA admin.)

## Deploy to Vercel (recommended)

1. Create a new GitHub repo and push this folder.
2. Go to https://vercel.com/new and **Import Project** from your repo.
3. Framework preset: **Next.js** (auto-detected)
4. Environment Variable (Optional): If you switch to React component captcha:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` = `<your-site-key>`
5. Deploy — Vercel will build and give you a live URL.

### Connect your domain
- In Vercel > Project > **Settings > Domains**: add `tlmrestoration.com.au` (or a subdomain).
- At your domain registrar, add the DNS records Vercel shows (usually CNAME for `www` + A/ALIAS for apex).
- Wait for propagation — your site will be live on your domain with HTTPS.

## Notes
- Public assets live in `/public`. Your logo is `public/TLM BLUE.png`.
- UI components are minimal (`components/ui/button.jsx`, `components/ui/card.jsx`) so no extra UI libs needed.
- Map uses a **click-to-load** pattern for better Core Web Vitals.
- Call/button uses `tel:+61403676345` and displays **0403 676 345**.
