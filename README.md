# Triangle Simulator 2.0.10 — Unified Canvas Workspace

The geometry canvas is the single persistent workspace. **Prikaz** remains a compact filter overlay. Selecting a triangle or exterior angle opens **Posmatraj**, a collapsible contextual observer WITHIN the canvas. **Pokaži matematiku** reveals all original equations and worked steps inside the scrollable observer; the drawing never shrinks. **Više alata** opens all original construction and precision-input controls as a scrollable overlay over the canvas, without a separate sidebar. All geometric and mathematical source code is retained from 2.0.9.

## GitHub Pages upgrade (existing installation)

1. Unzip the 2.0.10 PWA ZIP.
2. Upload **the contents** of this folder to the **root** of your existing GitHub Pages repository (the same location where `index.html` and `sw.js` already exist). Overwrite the previous `index.html`, `sw.js`, and `manifest.webmanifest`. Icons can remain identical; all are bundled.
3. Commit changes to `main`. Keep GitHub Pages `Settings > Pages > Deploy from a branch > main > /(root)`.
4. Open your existing published URL. On an already installed PWA, a new version is detected by the service worker; select `Ažuriraj` when prompted. If it does not show promptly, refresh the site online once. Cached app versions may take time to update depending on the browser.
5. Open the home-screen app and test again with Wi-Fi disabled AFTER its updated files have loaded.

The ZIP directory must **not** be nested one level inside the repository. HTTPS is required for the installable PWA; the portable HTML works directly from your files.

## Controls

- `Prikaz`: view filters only. The calculator computes everything all the time.
- Tap a region: opens the contextual `Posmatraj` panel. Tap its header to collapse/expand it without losing selection.
- `Pokaži matematiku`: reveal or hide detailed steps, vertically scroll inside the panel.
- `Zatvori`: clears the selected focus while retaining constructions and the current camera.
- `Više alata`: opens the existing angle input, constructions, classifications and relations over the canvas. Tap again to close.
- Camera, zoom, pan, pinch, Fit Triangle and Fit Constructions are unchanged.

**Status: candidate until manually accepted.** Updating may reload the current lesson; session persistence was not part of this milestone.
