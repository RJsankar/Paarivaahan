# Deployment and Submission Verification

The application is a static site. It can be hosted on any HTTPS static host without server-side configuration.

## Files that must be deployed

- `index.html`
- `styles.css`
- `app.js`
- `sw.js`
- `manifest.webmanifest`
- `404.html`
- `assets/brand/*`
- `assets/vehicles/*.png`

Do not deploy documentation, tests or the legacy single-file prototype unless the hosting platform requires the full repository.

## Hosting expectations

- Serve over HTTPS so service workers and browser capabilities work correctly.
- Serve `index.html` for the root URL.
- Preserve hash fragments such as `#home`, `#documents` and `#services`.
- Preserve query parameters, including `?demo=onboarding` and `?judge=1`.
- Use `Content-Type: application/javascript` for JavaScript and `image/png` for vehicle images.
- Do not place the public link behind authentication, preview approval or an expiring tunnel.

## Before deployment

```bash
npm test
python3 -m http.server 8765
```

Open `http://localhost:8765/?demo=onboarding#home` and complete the judge path.
Then open `http://localhost:8765/?judge=1#home` and use all four reviewer-strip buttons.

## After deployment

- [ ] Open the public URL in a fresh incognito window.
- [ ] Open it on a phone over mobile data.
- [ ] Confirm the independent-prototype banner appears.
- [ ] Complete onboarding and the driving-licence journey.
- [ ] Test English and Hindi.
- [ ] Refresh each hash route.
- [ ] Verify official links open in a new tab.
- [ ] Verify vehicle images and fonts render.
- [ ] Confirm there are no console errors.
- [ ] Confirm no access-request, password or hosting splash screen appears.
- [ ] Run the site once online, then confirm the shell reopens offline where supported.
- [ ] Record the final URL and deployment timestamp in `SUBMISSION.md`.

## Cache/version rule

When changing deployed CSS, JavaScript or cached assets, update all three values together:

1. Query versions in `index.html`
2. `CACHE_NAME` in `sw.js`
3. Query versions in the `APP_SHELL` list

Build 50 uses `20260828-50`.

## Rollback

Keep the last verified deployment available. If the final build fails a smoke test, redeploy the last verified static bundle rather than editing production in place.
