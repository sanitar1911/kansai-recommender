# Kansai Recommender — Foundation Build

This package is a cleaned, extension-friendly build of your current application.

## What was optimized

- Kept the current product behavior and feedback flow
- Moved inline CSS to `assets/app.css`
- Moved inline JS to `assets/app.js`
- Extracted the 12 embedded seed images to `assets/seed_photos/`
- Extracted the author avatar to `assets/avatar.png`
- Kept Cloudflare Pages Functions feedback endpoint in `functions/api/feedback.js`
- Kept the current multilingual structure and existing UI logic

## Main files

- `index.html` — page structure
- `assets/app.css` — styles
- `assets/app.js` — client-side logic, data, i18n, recommendation rendering
- `functions/api/feedback.js` — email feedback endpoint
- `wrangler.toml` — Cloudflare project config

## Recommended extension points

### 1. First page texts / brand
Edit:
- `index.html`
- i18n strings inside `assets/app.js`

### 2. Recommendation logic
Search in `assets/app.js` for:
- `TYPE_LABELS`
- `ATTRACTION_CONFIG`
- candidate / scoring functions
- result rendering functions

### 3. Feedback form
Frontend:
- `renderFeedbackSection()` in `assets/app.js`

Backend:
- `functions/api/feedback.js`

### 4. Images
- Seed images: `assets/seed_photos/`
- Avatar: `assets/avatar.png`

## Deployment

This build is intended for:
- GitHub repository
- Cloudflare Pages
- Pages Functions
- Resend-based feedback email

After replacing files in GitHub, Cloudflare Pages should auto-deploy.

## Notes

If you already changed the browser tab title in GitHub, keep your preferred `<title>` when merging this build.
