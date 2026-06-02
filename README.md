# Dibujarte CSS

✨ ¡Llegó el momento de dibujar con CSS! ✨

<p align="left">
  <a href="README.md">Español</a>
  ·
  <a href="public/Traducciones/english.md">English</a>
  ·
  <a href="public/Traducciones/portugues.md">Português Brasileiro</a>
</p>

[🟣 Live](https://dibujartecss.musarte.dev/)

<details>
<summary>👁 Preview</summary>

![DEMO GIF](http://g.recordit.co/wHGcE23mze.gif)
</details>

## 👀 ¿De qué se trata?

Vamos a adentrarnos en el uso de las hojas de estilo. ¿Preparadas/os para aprender y estimular su imaginación?

**#DibujarteCSS** es una galería comunitaria de arte hecho solo con HTML y CSS. Cualquiera puede participar: la idea no es competir, sino **compartir el proceso**, experimentar y sorprendernos con lo que se puede lograr sin imágenes ni SVG.

No importa si es tu primer dibujo con CSS o si ya llevas años — aquí hay espacio para ti 💜

## 🤔 ¿Cómo puedo participar?

No tienes que ser un experto en CSS. La idea es aprender, intentarlo y divertirse.

🟣 **Primero**, documentémonos sobre las propiedades que más nos van a servir:

* `background`
* `clip-path`
* `box-shadow`
* `border`

🟣 **Recursos recomendados** para meternos de lleno:

* [Dibujando con CSS Gradient](https://css-tricks.com/drawing-images-with-css-gradients/)
* [Single div drawings](https://hacks.mozilla.org/2014/09/single-div-drawings-with-css/)
* [Guía básica para lograr imágenes con CSS](https://medium.com/coding-artist/a-beginners-guide-to-pure-css-images-ef9a5d069dd2)

🟣 **Luego**, elige un objeto de la vida cotidiana que te represente y dibújalo con CSS. La técnica es a tu gusto: realista, cartoon, pixel art, flat… lo que quieras.

✨ **Opcional:** agrega interacción con un poco de JS.

## 🎨 Quiero que mi dibujo esté en la galería

¡Seguro! Tienes dos maneras de llegarnos para incluir tu arte:

1. Abre un **issue** en este repositorio, selecciona el template `Solicitud de adición de arte a galería` y llena la información.
2. **Publica con el hashtag #DibujarteCSS** y etiqueta a [@musartedev](https://x.com/musartedev).

Te leemos con mucho gusto 🎨

## ➕ Contribuye

¿Quieres mejorar la galería, arreglar bugs o proponer ideas? **¡Adelante!**

1. Haz **fork** del repositorio.
2. Crea una rama con tu cambio.
3. Abre un **PR** describiendo qué hiciste y por qué.

Serás añadido/a a la lista de contribuidores oficiales. Toda ayuda suma: código, copy, accesibilidad, diseño, documentación…

### 💜 Contribuidores oficiales

* [Mariangélica Useche](https://github.com/musartedev)
* [Andrés Parra](https://github.com/AndresParraGO)
* [Aldo RL](https://github.com/aldo-rl)
* [Carlos Bustillo](https://github.com/cabustillo13)

---

## 🛠 Stack y desarrollo

La galería corre con:

* Vite + React 18
* Tailwind CSS v4
* Cloudflare Pages (sitio estático)

### Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

### Deploy en Cloudflare Pages

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Build command: `npm run build`
3. Output directory: `dist`

O por CLI:

```bash
npm run deploy
```

### Generador IA (próxima iteración)

El generador por prompt fue retirado temporalmente. Plan de reimplementación:

→ [`docs/PLAN-GENERADOR-IA.md`](docs/PLAN-GENERADOR-IA.md)

## 📖 License

[MIT](LICENSE)
