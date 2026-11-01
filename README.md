# Triangle Simulator 2.0.15 — Separate Exterior Angle Filters

## Functional change
The floating **Prikaz** menu now has SIX independent visual filters:
1. Uglovi — interior angles α, β, γ
2. Stranice — side labels a, b, c
3. Simetrale uglova — three interior angle bisectors
4. Simetrale stranica — three perpendicular side bisectors
5. **Spoljašnji uglovi** — three exterior angles α₁, β₁, γ₁ and their adjacent straight-line extensions, independently selectable with Posmatraj
6. **Simetrale spoljašnjih uglova** — three exterior angle bisectors and their intersection centers X, Y, Z

The geometry/calculator remains always active. Each switch only controls visibility/constructions. Selecting an exterior angle without its bisector shows a whole-angle annotation and the supplementary-angle relationship; turn on exterior bisectors to see their half-angles and the additional equations. The six switches have the same compact layout as before.

No new mathematics or PWA architecture has been added. Theme, camera, movable panels and geometry interactions are inherited from 2.0.14.

## Updating GitHub Pages
1. Extract `Triangle_Simulator_2_0_15_Installable_PWA.zip`.
2. In the **same repository**, replace the existing root `index.html`, `sw.js`, `manifest.webmanifest` and other matching files from the extracted folder. Do not upload the containing folder as an extra level.
3. Commit and wait for your existing GitHub Pages deployment.
4. Refresh the hosted page or choose **Ažuriraj** when the installed PWA offers an update. Complete any current work before updating because the triangle is not session-persisted yet.

## Manual acceptance tests
- Toggle only Spoljašnji uglovi: three exterior angle arcs, labels, and ray extensions should appear; no purple exterior bisectors or X/Y/Z.
- Select α₁ with a tap: Posmatraj should show α + α₁ = 180°, without requiring any bisectors.
- Toggle only Simetrale spoljašnjih uglova: three bisectors and centers X/Y/Z should appear, but exterior-angle arcs and symbols should remain hidden.
- Toggle both: the exterior bisectors split the visible exterior angles, with the same mathematical relationships.
- Test small-screen dark and light themes, selection, zoom/pan, Fit Constructions, mobile rotation, and the updated PWA.

Status: **testing candidate** until manually accepted.
