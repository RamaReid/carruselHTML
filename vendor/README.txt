Coloca aquí el bundle minificado de PageFlip para usarlo sin depender del CDN.

Pasos rápidos (PowerShell):
1. Crea la carpeta vendor si no existe:
   New-Item -ItemType Directory -Path "vendor" -Force
2. Descarga el archivo desde jsDelivr:
   Invoke-WebRequest -Uri "https://cdn.jsdelivr.net/npm/page-flip@1.2.0/dist/js/page-flip.browser.min.js" -OutFile "vendor/page-flip.browser.min.js"

Si no puedes usar PowerShell, descarga manualmente desde:
https://cdn.jsdelivr.net/npm/page-flip@1.2.0/dist/js/page-flip.browser.min.js
y guarda el archivo como `vendor/page-flip.browser.min.js`.

Con el archivo en `vendor/`, la página cargará la librería desde local automáticamente. Si falta, hará fallback al CDN.