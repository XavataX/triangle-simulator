# Simulator trougla 2.0.29 — offline PWA

Install by hosting this folder via HTTPS at the **same origin and path** as 2.0.28.
Keep `manifest.webmanifest` ID `./` and the existing path unchanged to preserve the local named triangle library.
The service worker caches the new application shell as 2.0.29 without automatically reloading an active session.

Changes: native SVG download; current-theme PNG and SVG export (including geometry, text and explanations); refinements to long math lines and page layout.
PNG: 1×/2×/4×. SVG: resolution-independent and self-contained.

Do not clear site data or uninstall the old PWA before backing up your named projects with JSON export.
