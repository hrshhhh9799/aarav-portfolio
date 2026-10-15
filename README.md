# Aarav Shivhare — Personal Portfolio

> Award-worthy 3D developer portfolio — built from scratch with vanilla HTML, CSS, and JavaScript.

## 🌐 Live Preview

Open `index.html` directly in your browser, or deploy to [Netlify](https://netlify.com) / [GitHub Pages](https://pages.github.com) for free hosting.

---

## 📁 File Structure

```
aarav-portfolio/
├── index.html     ← HTML structure (all sections)
├── style.css      ← Premium dark aesthetic + 3D + animations
├── script.js      ← Interactivity: canvas, typewriter, cursor, tilt
├── config.js      ← ⭐ Edit all personal info HERE
├── .gitignore     ← Git ignore rules
└── README.md      ← This file
```

---

## ✨ Features

### Visual
- Premium dark aesthetic with multi-layer backgrounds
- Film grain noise overlay for a premium tactile feel
- Gradient hero name (violet → cyan)
- Space Grotesk + Inter + Fira Code typography stack

### 3D & Animations
- **Animated loader** — dual counter-rotating rings + progress bar
- **3D particle canvas** — 80 depth-aware particles with mouse repulsion & proximity lines
- **Custom cursor glow** — smooth violet radial gradient that tracks the mouse
- **3D card tilt** — `perspective(600px)` rotation on skill/project/hobby cards
- **Magnetic buttons** — CTAs subtly follow cursor movement
- **Parallax hero shapes** — 5 floating shapes track mouse
- **Typewriter effect** — 5 rotating phrases about Aarav
- **Scroll reveal** — IntersectionObserver with staggered delays
- **Scroll spy nav** — active link updates as you scroll

### Sections
1. **Hero** — Name, tagline, typewriter, animated CTAs
2. **About** — Orbital avatar, education details, learning chips
3. **Skills** — Honest `Learning`-level cards, no fake percentages
4. **Projects** — Status badges, placeholder markers, tech tags
5. **Hobbies** — Chess, Basketball, Sketching
6. **Contact** — Glassmorphic card with glow orbs

### Production-Ready
- Fully responsive (mobile drawer nav, fluid grids)
- Semantic HTML with ARIA labels
- `prefers-reduced-motion` support
- Config-driven — all personal data in one file
- No frameworks, no build tools — pure vanilla

---

## ⚙️ Customization

All personal data lives in **`config.js`**. Edit it and the entire site updates automatically.

### Update your info
```js
name: "Aarav Shivhare",
age: 18,
tagline: "Aspiring Software Developer",
bio: "Your bio here...",
```

### Add a real project
```js
{
  title: "My Project",
  description: "What it does.",
  tech: ["Python", "HTML"],
  status: "Live",
  placeholder: false,          // ← set to false for real projects
  link: "https://myproject.com",
  github: "https://github.com/you/project"
}
```

### Add social links
```js
contact: {
  email: "your@email.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  twitter: null   // set to URL or leave null to hide
}
```

### Change accent colors
Edit the CSS variables at the top of `style.css`:
```css
--accent-violet: #7C3AED;
--accent-cyan:   #06B6D4;
--accent-amber:  #F59E0B;
```

---

## 🚀 Deployment

### Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the entire `aarav-portfolio` folder
3. Done — live URL in seconds

### GitHub Pages
1. Create a new GitHub repository
2. Upload all 6 files
3. Go to Settings → Pages → Source: `main` branch
4. Your site is live at `https://yourusername.github.io/repo-name`

### Vercel
1. Push to GitHub
2. Import at [vercel.com](https://vercel.com)
3. Deploy with zero configuration

---

## 🛠️ Tech Stack

| Tool | Usage |
|------|-------|
| HTML5 | Semantic structure |
| CSS3 | Custom properties, Grid, Flexbox, animations |
| JavaScript (ES6+) | Canvas, IntersectionObserver, requestAnimationFrame |
| Google Fonts | Space Grotesk, Inter, Fira Code |

No frameworks. No dependencies. No build step.

---

## 📝 License

Personal portfolio — all rights reserved © 2026 Aarav Shivhare.

---

*Designed & built with ♥ — a real developer lives here.*
