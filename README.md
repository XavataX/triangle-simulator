# Triangle Simulator 2.0.27 — Save, Load & Session Recovery

## Install or update
Unzip and upload the **contents** to the root of the existing GitHub Pages repository. The URL and PWA identity remain the same. Open the hosted site, then use the built-in update prompt. Existing named projects are kept in IndexedDB on the same origin; the service-worker cache is replaced but never clears project data.

## What is new
- Canvas-anchored **Moji trouglovi** shelf (▣) at the upper right, no separate window.
- Save multiple named setups, open or deliberately update an existing entry, confirm deletion inline.
- Auto-recover the latest session after reopening the PWA/browser.
- Import and export portable versioned JSON project files; import validates geometry and construction state first.
- Named projects persist in IndexedDB, with a localStorage fallback when IndexedDB is not available.
- Each project saves vertices, givens, equality constraints, point names, construction switches, extension positions, selected region, notebook offset/expanded state, camera, visibility filters and theme.
- No changes to the independent image export renderer yet; that is planned for 2.0.28.

## Limits
On browser data clearing or uninstallation, origin-scoped saved projects can be lost; export JSON backups. The portable file:// origin can be isolated from the installed PWA origin. The browser must allow local storage for auto recovery. This is a candidate awaiting physical-device acceptance.
