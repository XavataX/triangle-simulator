# Triangle Simulator 2.0.26 — Movable notebook & inline explanation

## Installation or updating GitHub Pages

Extract the ZIP. Upload **the files inside this package**, not the enclosing folder, into the **root of the existing GitHub repository**: `index.html`, `sw.js`, `manifest.webmanifest`, `.nojekyll`, and `icons/`.

Commit the replacements. The public GitHub Pages URL remains the same. Open that website online; when the installed PWA detects a waiting service worker, select **Ažuriraj** after finishing any current exercise. You may need a reload after Pages publishes.

The application can run offline once it has been loaded and cached by its service worker.

## Changes from 2.0.25

- Mathematical work remains ordinary SVG notebook writing on the same zoomable and pannable camera as the triangle.
- Drag the **Aktivni trougao: ...** title with a mouse or one finger to move the written work relative to the diagram. The camera stays still.
- Tap/click **Detaljnije objašnjenje ▾** to unfold additional explanation directly below the calculation. Tap again to hide only the extra explanation. Basic mathematics never disappears.
- The separate **Posmatraj** window is retired. Existing internal calculation elements remain as a hidden backing store; no separate mathematics panel is shown.
- **Fit All** accounts for the entire current notebook, including expanded detail. **Fit Triangle** frames the diagram only.
- Existing geometry, inline angle and point editing, intersection sectors, mobile carousel, themes and PWA update mechanism are retained.

## Limitations

- The notebook is part of world space: when zoomed out far enough it becomes small, and moving it outside the viewport requires normal canvas pan or Fit All to recover it.
- Notebook placement is retained while the app is open but does not persist across app restarts. On resize it is re-anchored relative to the triangle with the moved offset preserved.
- The extended explanation is concise and draws on the existing mathematical notes; this release does not add a new proof engine.

This is a **testing candidate** until manually accepted on a physical phone.
