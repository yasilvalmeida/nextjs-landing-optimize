# ⚡️ Next.js Optimized Landing Page

A high-performance, accessible, and modern landing page built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion** — tuned for 90+ Lighthouse scores, fully responsive design, and complete Playwright test coverage.

## 🚀 Feature Highlights
- **Next.js 14 (App Router)** with code-splitting, tree-shaking, and Image / Font optimization  
- **Tailwind CSS** utility-first styling with custom color palette & typography  
- **Framer Motion** interactive animations & micro-interactions (reduced-motion aware)  
- **ERC Lighthouse Scores**: Performance 90+, Accessibility 95+, Best-Practices 90+, SEO 90+  
- **Playwright + Axe** end-to-end, visual-regression, and accessibility tests  
- **Bundle Analyzer & Gzip** for continuous performance monitoring  
- **WCAG 2.1 AA** compliant: keyboard nav, ARIA labels, focus indicators, skip links  

## 🗂️ Project Structure
```
nextjs-landing-optimize/
├─ app/                   # Next.js 14 App Router
│  ├─ globals.css         # Tailwind base styles
│  ├─ layout.tsx          # Root layout (meta / fonts)
│  └─ page.tsx            # Landing page
├─ components/            # Reusable UI
│  ├─ Header.tsx ┆ Hero.tsx ┆ Features.tsx ...
├─ tests/                 # Playwright suites
│  ├─ landing.spec.ts     # Visual + perf tests
│  └─ accessibility.spec.ts
├─ next.config.js ┆ tailwind.config.js
├─ playwright.config.ts ┆ lighthouserc.js
└─ Dockerfile (optional)
```

## ⚙️ Setup

```bash
git clone https://github.com/<user>/nextjs-landing-optimize.git
cd nextjs-landing-optimize
npm install          # or yarn / pnpm
cp .env.example .env.local   # edit if needed
npm run dev          # local dev → http://localhost:3000
```

## 🛠 Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start prod server |
| `npm run lint` | ESLint |
| `npm run test` | Playwright tests |
| `npm run test:ui` | Playwright with UI |
| `npm run lighthouse` | Lighthouse CI audit |
| `npm run analyze` | Bundle analyzer |

## 🧪 Testing Strategy
- **Visual regression**: device & breakpoint screenshots  
- **Accessibility**: automated Axe + keyboard-nav flows  
- **Performance**: Lighthouse CI on each PR / deploy  

## 🎨 Customization
Edit **`tailwind.config.js`** for colors & font stack and tweak Framer Motion variants inside individual components, e.g.:

```ts
const fadeUp = { hidden:{opacity:0,y:40}, visible:{opacity:1,y:0,transition:{duration:0.4}} }
```

## 📈 Optimization Targets
- **FCP < 1.5 s**   •  **LCP < 2.5 s**   •  **CLS < 0.1**  
- Lazy-loaded images (WebP/AVIF), dynamic imports for heavy sections, and strict 3rd-party script control.

## 🚀 Deploy
**Vercel (recommended)**  
1. Connect repo → import as Next.js project  
2. Build Cmd: `npm run build`   •  Output: `.next`  
3. Environment vars → if any (e.g., analytics)  
4. Deploy — automatic on push.

Other options: Netlify, AWS Amplify, Docker (provided Dockerfile).

## 🤝 Contributing
1. Fork → `git checkout -b feat/<name>`  
2. Code + tests → `npm run test` (all green)  
3. PR with description — we’ll review ASAP!

## 📄 License
MIT © 2025 Your Name

---

Built with ❤️ by Next.js, Tailwind CSS, and Framer Motion — enjoy shipping blazing-fast landing pages!
