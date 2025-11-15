# Mi Revista (Carrucel HTML)

Versión definitiva del proyecto: revista interactiva usando PageFlip.

Contenido:
- `index.html` — markup principal
- `style.css` — estilos
- `accion.js` — inicialización y comportamiento de PageFlip
- `img/` — imágenes usadas como páginas
- `vendor/page-flip.browser.min.js` — copia local del bundle PageFlip

Cómo probar localmente
1. Abrir `index.html` con el navegador (doble click o `Archivo -> Abrir`).
2. El proyecto está diseñado para pantalla completa; redimensiona la ventana para ver comportamiento responsivo.

Notas sobre el control de versiones y `vendor/`
- Actualmente el archivo `vendor/page-flip.browser.min.js` está incluido en el repositorio (versión 1.2.0). Si prefieres no versionarlo, edita `.gitignore` y elimina/ajusta la entrada correspondiente.

Instrucciones para subir a GitHub (PowerShell)

# 1) Crear el repo en GitHub (opcional, si tienes la CLI `gh` configurada)
# gh repo create <owner>/<repo-name> --public --source . --remote origin --push

# 2) Si ya creaste el repo en GitHub por la web, añade el remote y empuja:
# Reemplaza <URL-DEL-REPO> por la URL que GitHub te entregue (SSH o HTTPS)

git remote add origin <URL-DEL-REPO>
git push -u origin main

Si no tienes `gh` configurado o prefieres hacerlo manualmente desde la web, crea un nuevo repositorio y sigue los pasos que te muestre GitHub para "push an existing repository from the command line".

Contacto
- Si quieres, puedo crear el repositorio remoto por ti (requiere token/permiso) o guiarte paso a paso para enlazar y pushear.

---

## Cambios recientes (2025-11-15)

- Reordenadas las imágenes "hero" según la petición del usuario:
	- `spread-2` → `scohause-hero.png`
	- `spread-3` → `magahause-hero.png`
	- `spread-5` → `jomahause-hero.png`
	- `spread-6` → `usahause-hero.png`
	- `spread-7` → `ciane-hero.png`
	- `spread-8` → `vidahause-hero.png`
	- `spread-4` se mantiene como `gadehause-hero.png`
	- `spread-9` → `markhause-hero.png`

- Se añadió `spread-10` al final de la revista y se asignó la imagen `img/hero/donahause-hero.png`.

- Se unificó la técnica de renderizado de las spreads para usar `background-image` en CSS
	(se eliminó el uso mixto de `<img>` en `spread-10`), y se limpió `IMAGE_MAP.md`.

Si quieres que añada más historial o un changelog separado, lo organizo como prefieras.
