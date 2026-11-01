# Triangle Simulator 2.0.11 — Unified Workspace and Movable Panels

## Changes
- The triangle canvas fills the entire visible viewport. No blank masthead or reserved sidebar.
- **Prikaz** remains a contextual floating filter panel. **Posmatraj** opens only when geometry is selected. **Više alata** opens from the upper-right gear icon.
- All three panels can be dragged by their headings using mouse or touch. A tap on the Prikaz/Posmatraj heading still collapses or expands normally.
- Panel positions stay stable when selecting another triangle or opening equations and are saved locally for portrait and landscape separately. Panels are clamped to the visible canvas and repositioned to avoid control overlaps.
- The triangle-selection chooser has a dedicated bottom lane and does not jump into the upper controls in mobile landscape.
- Only compact **− / +** zoom buttons are always visible. Fit Triangle (F), Fit All (Shift+F), and Reset are inside **Više alata**, with their keyboard shortcuts preserved.
- Geometric calculations, labels, exterior constructions, angle input and gesture controls remain based on 2.0.10.

## Update the same GitHub Pages PWA
1. Extract `Triangle_Simulator_2_0_11_Installable_PWA.zip`.
2. Upload **the files inside the extracted folder** to the root of your existing GitHub repository (where `index.html` currently resides), replacing matching files.
3. Commit changes. Your existing Pages URL and home-screen app remain the same.
4. Open the website online, refresh if necessary and choose `Ažuriraj` when the PWA offers an update. Do not assume every installed browser will refresh its cache immediately.
5. Once updated, test the offline version by disabling internet access.

The portable HTML is independent and works directly from a local file. The installable PWA needs HTTPS hosting. Session geometry is not yet persisted across app reloads.

**2.0.11 is a testing candidate until manually accepted.**
