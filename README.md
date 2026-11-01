# Triangle Simulator v2.0.29 — Android / Chrome PWA install hotfix

This is the complete installable PWA folder, NOT an APK and NOT meant to be opened from a ZIP or from file://.

## Deploy and install
1. Export JSON backups of your projects from any existing installed version.
2. Extract the ZIP and upload **the contents** (index.html, manifest.webmanifest, sw.js and icons/) to an HTTPS website, for example GitHub Pages or Cloudflare Pages, under the same path as previous versions.
3. On your Android phone open the real HTTPS address in Chrome (not the ZIP/HTML download) and choose ⋮ > Add to Home screen > Install, or ⋮ > Install app (label may vary).
4. For existing installations, reload the same address and accept the in-app update prompt. Do not delete site storage.

This hotfix restores the missing HTML web manifest link and service-worker registration that were present in v2.0.27 but accidentally omitted in v2.0.28 and v2.0.29. PWA manifest id, start URL and scope remain ./ to preserve existing application identity and storage on the same origin/path. Service-worker cache identifier changed to 2.0.29-install-fix so old cached pages can be replaced. Mathematical tools, projects, theme-aware PNG/SVG rendering, and portable HTML are unchanged.

Hosting on an HTTPS website with a valid TLS certificate is required for normal installation. Opening an extracted HTML file from the phone's storage is not sufficient for PWA installation.
