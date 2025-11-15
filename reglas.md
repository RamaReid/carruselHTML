# Flip-Book Photo Magazine — Working Rules for Copilot
> **This file defines the ONLY valid structure and behavior you must follow.  
> Do not go outside these rules unless explicitly instructed.**

---

## 📌 1. Core Concept (MUST ALWAYS be respected)

This project is a **photo-based flip-book magazine** using PageFlip.

The magazine is composed ONLY of **spreads**, NOT individual pages.

### ✔️ 1 SPREAD = 1 PHOTO  
### ✔️ 1 PHOTO = 2 PAGES  
- `spread-X-left` → left half of the photo  
- `spread-X-right` → right half of the same photo  

There are **no single-page photos**, no mixed content, no layouts other than full-screen photos.

---

## 📌 2. Allowed HTML Structure

Inside the `<div id="mi-revista" class="flip-book">` container, the ONLY valid units are:

```html
<div id="spread-N-left" class="page spread">
    <div class="page-content"></div>
</div>

<div id="spread-N-right" class="page spread">
    <div class="page-content"></div>
</div>

---

## 📌 3. Naming and image mapping (required)

- All spread pairs MUST follow the ID convention `spread-<n>-left` and `spread-<n>-right`.
- Images used by spreads MUST be declared in `IMAGE_MAP.md` and must exist under `img/hero/`.
- Left pages show the LEFT half of the image (CSS: `background-position: left center`).
- Right pages show the RIGHT half of the image (CSS: `background-position: right center`).

## 📌 4. Exceptions and operational notes

- No single-page photos are allowed as content images; every photographic unit must be a spread.
- Non-photographic content (text pages, ads) is permitted only if placed inside a spread pair and marked with `data-name` and documented in `IMAGE_MAP.md` as `non-photo` entries.
- The assistant may not rename or reorder spreads without explicit approval.

## 📌 5. How the assistant should act (integration rules)

- The assistant MUST respect `reglas.md` as the authoritative guide for layout and IDs.
- All image placements must be recorded in `IMAGE_MAP.md`.
- The assistant may update `style.css` to add per-spread background rules but must NOT change the spread IDs in `index.html` unless the user expressly permits structural edits.

---

_This file is the canonical guide for the flip-book layout. If you need structural changes (renaming spreads, adding single-page photos, changing the cover behavior), make an explicit request tagged with `STRUCTURE`._
