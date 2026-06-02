# Dibujarte CSS

✨ It's time to draw with CSS! ✨

<p align="left">
  <a href="../../README.md">Español</a>
  ·
  <a href="english.md">English</a>
  ·
  <a href="portugues.md">Português Brasileiro</a>
</p>

[🟣 Live](https://dibujartecss.musarte.dev/)

<details>
<summary>👁 Preview</summary>

![DEMO GIF](http://g.recordit.co/wHGcE23mze.gif)
</details>

## 👀 What is it about?

Let's dive into stylesheets. Ready to learn and spark your imagination?

**#DibujarteCSS** is a community gallery of art made with HTML and CSS only. Anyone can join — the goal isn't to compete, but to **share the process**, experiment, and be amazed by what you can build without images or SVG.

Whether it's your first CSS drawing or you've been at it for years, there's a place for you here 💜

## 🤔 How can I participate?

You don't have to be a CSS expert. The idea is to learn, try, and have fun.

🟣 **First**, let's read up on the properties that will help the most:

* `background`
* `clip-path`
* `box-shadow`
* `border`

🟣 **Recommended resources** to go deeper:

* [Drawing with CSS Gradient](https://css-tricks.com/drawing-images-with-css-gradients/)
* [Single div drawings](https://hacks.mozilla.org/2014/09/single-div-drawings-with-css/)
* [Basic guide to create images with CSS](https://medium.com/coding-artist/a-beginners-guide-to-pure-css-images-ef9a5d069dd2)

🟣 **Then**, pick an everyday object that represents you and draw it with CSS. Any style works: realistic, cartoon, pixel art, flat… your call.

✨ **Optional:** add some interaction with JS.

## 🎨 I want my drawing in the gallery

Sure thing! You can reach us in two ways:

1. Open an **issue** in this repository, select the template `Solicitud de adición de arte a galería`, and fill in the details.
2. **Post with the hashtag #DibujarteCSS** and tag [@musartedev](https://x.com/musartedev).

We'd love to see your work 🎨

## ➕ Contribute

Want to improve the gallery, fix bugs, or suggest ideas? **Go for it!**

1. **Fork** the repository.
2. Create a branch with your changes.
3. Open a **PR** describing what you did and why.

You'll be added to the list of official contributors. Every bit helps: code, copy, accessibility, design, docs…

### 💜 Official contributors

* [Mariangélica Useche](https://github.com/musartedev)
* [Andrés Parra](https://github.com/AndresParraGO)
* [Aldo RL](https://github.com/aldo-rl)
* [Carlos Bustillo](https://github.com/cabustillo13)

---

## 🛠 Stack & development

The gallery runs on:

* Vite + React 18
* Tailwind CSS v4
* Cloudflare Pages (static site)

### Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

### Deploy on Cloudflare Pages

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Build command: `npm run build`
3. Output directory: `dist`

Or via CLI:

```bash
npm run deploy
```

### AI generator (next iteration)

The prompt-based generator was temporarily removed. Reimplementation plan:

→ [`docs/PLAN-GENERADOR-IA.md`](../../docs/PLAN-GENERADOR-IA.md)

## 📖 License

[MIT](../../LICENSE)
