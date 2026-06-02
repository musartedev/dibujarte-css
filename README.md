# Dibujarte CSS

Galería comunitaria de arte hecho con HTML y CSS.

[Live](https://dibujartecss.musarte.dev/)

## Stack

- Vite + React 18
- Tailwind CSS v4
- Cloudflare Pages (sitio estático)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Deploy en Cloudflare Pages

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Build command: `npm run build`
3. Output directory: `dist`

O por CLI:

```bash
npm run deploy
```

## Generador IA (próxima iteración)

El generador por prompt fue retirado temporalmente. Plan de reimplementación:

→ [`docs/PLAN-GENERADOR-IA.md`](docs/PLAN-GENERADOR-IA.md)

## Contribuir arte

1. Abre un issue con el template de solicitud de arte.
2. O publica con **#DibujarteCSS** y etiqueta a @musartedev.

## License

MIT
