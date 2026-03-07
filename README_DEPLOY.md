# Kansai recommender feedback package (Cloudflare Pages Functions + Resend)

## Included
- `index.html` — UI with embedded trilingual feedback form
- `functions/api/feedback.js` — Pages Function endpoint for sending feedback emails via Resend
- `wrangler.toml` — minimal Pages/Functions config
- `.dev.vars.example` — local development environment variable example

## Recommended deployment flow
1. Create or use an existing Cloudflare Pages project.
2. Upload this whole directory as your project.
3. In Cloudflare Pages dashboard, set these production environment variables:
   - `RESEND_API_KEY`
   - `FEEDBACK_TO_EMAIL`
   - `FEEDBACK_FROM_EMAIL`
4. Make sure the `FEEDBACK_FROM_EMAIL` domain or subdomain is verified in Resend.
5. Redeploy the Pages project.
6. Test:
   - open the site
   - generate recommendations
   - scroll to the embedded feedback section
   - submit a feedback record
   - check your inbox

## Local development
1. Copy `.dev.vars.example` to `.dev.vars`
2. Fill in real values
3. Run Pages local dev:
   - `npx wrangler pages dev .`

## Notes
- The feedback form submits to `/api/feedback`
- Required questions are validated on both client and server
- Optional email is used as `reply_to` if present
- A hidden honeypot field is included to reduce basic bot spam
- If you later want stronger anti-spam protection, add Cloudflare Turnstile

## Resend requirements
- `FEEDBACK_FROM_EMAIL` must use a verified sending domain/subdomain in Resend
- If sending fails, check the Pages Function logs and your Resend dashboard

## Suggested production hardening
- Add Turnstile
- Add origin checks if the site is served only from one hostname
- Add rate limiting using Cloudflare Turnstile, KV, or Durable Objects
