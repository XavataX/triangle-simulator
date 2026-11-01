# Simulator trougla — 2.0.22 Live Canvas Math

## Deploy to your existing GitHub Pages repository

1. Extract `Triangle_Simulator_2_0_22_Installable_PWA.zip`.
2. Upload **the contents** (`index.html`, `sw.js`, `manifest.webmanifest`, `icons/`, `.nojekyll`) directly into the **root of the same GitHub repository**, replacing matching files. Do not upload the containing folder as an extra directory.
3. Commit the changes; GitHub Pages will publish on your existing URL.
4. Open the site online and apply **Ažuriraj** when the service worker prompts. Refresh after deployment if the previous app is still cached. A normal PWA installation needs HTTPS or localhost, and the cache updates only once the new service worker activates.

## 2.0.22 interaction

- Choose a triangle on the drawing or from the mobile selection carousel.
- Its relevant equation steps, related triangles and live numeric result appear in a right-side in-canvas math reading area (desktop and mobile landscape), or a collapsible bottom strip (mobile portrait).
- Tap the compact strip to reveal the working. Click `Teorija i detalji` for the older detailed Posmatraj window. `Nazad na crtež` returns to live math.
- Drag the live math title to reposition when it obstructs the drawing. The canvas itself does not resize.
- Free vertex dragging releases previous angle/side constraints. To keep given homework conditions, do not freely reshape the triangle; set new values directly.

### Important limitations

- The expanded mathematical overlay may still be crowded on very small phones; collapse it or move it with the header. It is not a separate app view.
- Work is calculated from the current displayed construction. We have not added new geometry mathematics or exercise-specific solvers.
- Updating an installed PWA reloads its page and does not currently restore the complete exercise state.

### Portable option

`Triangle_Simulator_2_0_22_Portable.html` is a separate, single-file, offline edition. It must not replace `index.html` in the PWA directory because it does not register the service worker.
