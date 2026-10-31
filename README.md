# Simulator trougla 2.0.8 — Installable PWA

This is the **same mathematical and visual application** as the single-file
portable HTML edition. This ZIP adds only installable-app packaging and offline
update support. All content is local; no account, external API, or CDN is needed.

## Deploy — the correct way to install on phones

1. Unzip this package. Upload the **contents** (not merely the ZIP) to a web
   server with HTTPS. Keep `index.html`, `sw.js`, `manifest.webmanifest`,
   `.nojekyll`, and `icons/` at the same relative locations.
2. Open the HTTPS URL in your phone browser **once while online**.
3. **Android:** in Chrome's menu choose Install app / Add to Home screen
   (wording depends on browser). **iPhone:** use Share → Add to Home Screen,
   with Open as Web App enabled if offered. **Desktop:** use the install option
   in a supporting browser.
4. Launch via the new app icon. Once cached, it works without internet.

The PWA will **not install via file://** or an HTML preview attachment.
`localhost` / `127.0.0.1` is allowed for local desktop development.

## GitHub Pages (no paid server required)

1. Create a repository, e.g. `triangle-simulator`.
2. Upload all extracted files from this package to the repository root.
3. In the repository settings open Pages and publish the main branch from `/ (root)`.
4. Use the displayed HTTPS `https://<username>.github.io/triangle-simulator/`
   address. Project names and exact Pages URLs depend on your repository.
5. Open on each device while online and use the browser's install option.

If the repository is private, check hosting/account limitations. The published
website is publicly accessible on a public GitHub Pages site; do not include
student personal data. A repository or publishing step is required: this ZIP is
not already hosted.

## Version-aware updates (important for future features)

- For each release, update both `index.html` and `sw.js` and change `RELEASE`
  in `sw.js` to the new version. This causes the browser to detect a new worker
  and cache the new version. Replace other changed assets at the same time.
- An online device checks for a new worker when the app opens and when the
  browser returns to the app or comes online. The app displays a small Serbian
  update banner. Choose **Ažuriraj** to activate and reload, or **Kasnije**
  to keep the current working session undisturbed.
- A device that stays offline cannot receive updates until it reconnects.
- The activation step clears only previous caches for the same application
  scope, not unrelated sites/apps.
- Do not remove or rename `sw.js` on future releases; it is the browser's
  service-worker update entry point.
- The code has no save/resume feature yet. **Refreshing for an update resets
  the current geometry session.** Explain this to students before updating.

## Local developer testing

From the extracted directory run:

    python -m http.server 8000

Open `http://localhost:8000/` in Chromium or another supporting browser. In
DevTools → Application inspect Manifest, Service Workers, and Cache Storage.
Check offline reload only **after** the first online visit has completed and
its service worker has activated.

## Portable version

`Triangle_Simulator_2_0_8_Portable.html` is distributed separately. It works
from a local file and contains no service-worker registration. Both builds
share the same simulator source at this milestone.
