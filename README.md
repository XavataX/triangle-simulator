# Triangle Simulator 2.0.24 — Portrait selector visibility fix

Focused correction built on the **2.0.23** integrated mathematical canvas.

## What changed

- In **phone portrait**, the overlapping-triangle selector is no longer attached just 7px from the bottom edge. It is placed above a conservative bottom clearance plus the device's safe-area inset.
- The selection carousel stays horizontally centered and inside the canvas width.
- Existing swipe-to-preview and tap-to-confirm interactions are preserved.
- Desktop and phone landscape continue using the existing selector placement.
- Geometry, direct point/angle editing, notebook equations, themes, zoom/pan and the underlying mathematics are unchanged.

## Publish to existing GitHub Pages

1. Extract the 2.0.24 PWA ZIP and open the extracted folder.
2. Upload **the folder contents** to the **root** of the existing repository (alongside `index.html` and `sw.js`), replacing older matching files.
3. Commit the changes and wait for GitHub Pages to publish.
4. Open the existing public URL in a browser; use the PWA **Ažuriraj** prompt when shown. If necessary close and reopen the installed app after the site has updated.
5. Test the selector on a real phone in portrait, including with browser navigation bars visible. Tap a region where multiple triangles overlap, horizontally swipe, and tap a centered tab to confirm.

Version 2.0.24 is a **candidate pending manual device acceptance**. The portable HTML can still run without hosting.
