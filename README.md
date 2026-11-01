# Simulator trougla — 2.0.23 Integrated Mathematical Notebook

## GitHub Pages deployment

1. Extract `Triangle_Simulator_2_0_23_Installable_PWA.zip`.
2. Upload **all extracted files and the `icons` folder** to the ROOT of your existing GitHub repository, replacing the older versions: `index.html`, `sw.js`, `manifest.webmanifest`, `README.md`, `icons/`, `.nojekyll`.
3. Commit. Keep GitHub Pages set to `main` / `/(root)`.
4. Visit the existing public HTTPS site; after the new service worker is detected, choose **Ažuriraj** to update the installed PWA. Finish any in-progress work before reloading because full exercise-state restoration is not yet implemented.

## 2.0.23 interactions

- Equations are real SVG text in the same `cameraView` group as the drawing. The writing has no independent window, buttons, collapse state, background, or scrolling container.
- On desktop the notebook places the triangle to the left and mathematics at the upper right. On narrow phones both objects still share world space; zoom in for reading and pan sideways to move between them.
- **Fit All** (`Shift+F` / **Sve** in Više alata) frames constructions and the mathematical writing. **Fit Triangle** (`F`) frames only the triangle.
- Click/tap the drawing or mobile triangle carousel to select another region. The notebook calculation immediately changes. Related triangle names written in the notebook remain clickable.
- `Detaljnije objašnjenje ↗` opens the optional Posmatraj theory window.
- The notebook always shows the basic mathematics of △ABC if no subtriangle is selected.

## Files

- `index.html`: installable web app, includes the offline service worker registration.
- `sw.js`: version-aware offline cache for application shell and icons.
- `manifest.webmanifest`, `icons/`: PWA installation metadata and icons.
- The separate `Triangle_Simulator_2_0_23_Portable.html` is offline and does **not** register a service worker.

## Important limitations

- On small phones, Fit All is a **whole-page overview**, not a readable zoom level; pinch to read the math or geometry. Writing is deliberately not pinned to the viewport.
- The system does not yet save every geometry edit across installed PWA updates.
- Mathematical formulas and constraint semantics are inherited from v2.0.22; this release changes the presentation system only.
