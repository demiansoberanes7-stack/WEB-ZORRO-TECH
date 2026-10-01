# WEB-ZORRO-TECH

Sitio oficial de **Zorro Tech** (Tijuana): sitios web, software, mantenimiento de cómputo y automatización para pequeños negocios. Escrito en español, construido con **React + Vite**.

[https://zorrotech.online](https://zorrotech.online)

## Requisitos

- Node.js 22 o 24
- npm 10+

## Arranque local

```sh
npm install
npm run dev            # http://localhost:5173
npm run lint           # ESLint (flat config)
npm run build          # genera dist/
npm run preview        # sirve dist/ en local
```

## Rutas

| Ruta | Página |
| --- | --- |
| `/` | Portada (hero, servicios, portafolio bento, reconocimiento, CTA) |
| `/portafolio-web` | Galería de sitios web |
| `/contenido-multimedia` | Galería de diseño, video y contenido |
| `/blog` | Blog (stub: «muy pronto»; panel propio pendiente) |
| `*` | Redirige a `/` |

## Estructura

```
src/
├── App.jsx              # rutas y layout
├── main.jsx             # entrada (index.css + scroll-scenes.css)
├── index.css            # tokens (:root), reset, tipografía, utilidades globales
├── scroll-scenes.css    # escenas scroll (sticky), skip-link, Lenis
├── components/          # secciones de la portada (Header, Hero, …)
└── pages/               # ContenidoMultimedia, PortafolioWeb, Blog (+ lumarkAssets.js)
public/
├── assets/              # logo, video hero, previews
├── Zorro/               # mascota (usada por FinalCTA)
├── docs/                # CV en PDF
├── portafolio-multimedia/  # media referenciada por lumarkAssets.js
├── robots.txt           # indexación
└── sitemap.xml
```

## Variables de entorno

Copia `.env.example` a `.env.local` (nunca se sube al repositorio) y reinicia Vite:

- `VITE_DEMO_VIDEO_URL`: URL de video MP4 para la demostración. Sin ella se muestra el aviso «próximamente» con enlace al portafolio.
- `VITE_PREORDER_ENDPOINT`: endpoint del formulario de contacto (POST JSON). Por defecto usa FormSubmit → `ventas@zorrotech.online`.

En **Hostinger** las variables reales se configuran en hPanel (no en el repo): `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `JWT_SECRET` y `DATABASE_URL` se usarán cuando se agregue el backend del blog (`server.js`).

## Contacto y redes

- WhatsApp: [+52 664 549 5385](https://wa.me/526645495385) (todos los CTAs y el botón flotante)
- Instagram y Facebook se muestran como texto hasta tener sus URLs.
- Analítica: Google Analytics 4 (`G-X72PGXDZXK`) cargado en `index.html`.

## Deploy (Hostinger)

1. Este repositorio es la fuente de verdad: push a `main` → Hostinger (app Node.js) hace pull.
2. Build de producción: `npm install && npm run build` genera `dist/`.
3. El backend del blog (Express + MySQL, `server.js`) servirá `dist/` junto con `/api/*` — pendiente de implementar; hasta entonces el sitio se puede servir estático desde `dist/`.
4. Los `.env` viven solo en hPanel; el repo es público y jamás debe contener secretos.

## Notas de contenido

- Las vistas del portafolio son ilustrativas (mockups), no capturas de proyectos reales.
- El cintillo animado presenta los 12 servicios definidos en `AudienceSection.jsx`.
- Iconos de las tarjetas bento: Font Awesome Free 6.5.2 vía jsDelivr.
- Logo y video del hero fueron proporcionados por el usuario (`public/assets/`).
