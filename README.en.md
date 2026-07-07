### 🌐 Choose your language

[🇺🇦 Українська](README.md) | [🇬🇧 English](README.en.md) | [🇩🇪 Deutsch](README.de.md)

<!-- AUTOGEN:STATS -->
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![Stylelint](https://img.shields.io/badge/Stylelint-263238?style=for-the-badge&logo=stylelint&logoColor=white)](https://stylelint.io/) [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/) [![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)](https://postcss.org/) [![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/) [![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)](https://swiperjs.com/) [![Raty.js](https://img.shields.io/badge/Raty.js-FFD700?style=for-the-badge&logo=star&logoColor=black)](https://www.npmjs.com/package/raty-js) [![Terminal](https://img.shields.io/badge/Terminal-000000?style=for-the-badge&logo=windows-terminal&logoColor=white)](https://docs.microsoft.com/en-us/windows/terminal/) [![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/) [![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/) [![Modern Normalize](https://img.shields.io/badge/Modern_Normalize-CC2927?style=for-the-badge)](https://cdnjs.com/libraries/modern-normalize) [![SVGOMG](https://img.shields.io/badge/SVGOMG-FFB900?style=for-the-badge)](https://jakearchibald.github.io/svgomg/) [![IcoMoon](https://img.shields.io/badge/IcoMoon-825794?style=for-the-badge)](https://icomoon.io/) [![Squoosh](https://img.shields.io/badge/Squoosh-4285F4?style=for-the-badge)](https://squoosh.app/) 

[![📊 Views](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app/main/assets/db/visitors-badge.json)](https://github.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app/graphs/traffic)
[![⭐ Stars](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app/main/assets/db/likes-badge.json)](https://github.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app/actions/workflows/screenshot-and-visitor.yaml)
[![👥 Contributors](https://img.shields.io/github/contributors/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app?style=for-the-badge&logo=github&color=blue)](https://github.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app/graphs/contributors)
[![📦 Size](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app/main/assets/db/repo-size.json)](https://github.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app)
[![📄 License](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app/main/assets/db/repo-license.json)](https://github.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app/blob/main/LICENSE)


## 📸 Project screenshot
![Project Screenshot](./assets/screenshot.png)

## 👥 Contributors
[![Contributors](https://contrib.rocks/image?repo=VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app&max=20)](https://github.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app/graphs/contributors)
<!-- END:AUTOGEN -->

---

## 📌 Project name

**TravelTrucks** — frontend web application for camper rental. 

---

## 🎯 About the project

**TravelTrucks** is the client-side app for a camper booking service. Users can browse the catalog, apply filters, load more cards, open camper details with a gallery and reviews, and submit a booking form.

**Design:** [Campers (Figma)](https://www.figma.com/design/q9il1hHac6kzbFAoxWSxet/Campers--Copy-?node-id=48730-474&m=dev)

**API:** [Campers API](https://campers-api.goit.study)

---

## ✨ Key features

| Page | Route | Features |
|------|-------|----------|
| Home | `/` | Hero banner, **View Now** CTA → catalog |
| Catalog | `/catalog` | Camper list, filters, **Load More** (4 per page), loader |
| Camper details | `/catalog/[camperId]` | Swiper gallery, reviews, booking form |

---

## 🛠 Technologies

| Category | Stack |
|----------|-------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | CSS Modules |
| Data | [TanStack Query](https://tanstack.com/query) (`useInfiniteQuery`) |
| HTTP | [Axios](https://axios-http.com/) |
| UI | [React Icons](https://react-icons.github.io/react-icons/), [Swiper](https://swiperjs.com/), [react-hot-toast](https://react-hot-toast.com/) |

---

## 🚀 Installation and usage

1. **Clone the repository:**
   ```bash
   git clone git@github.com:VuToV-Mykola/campers.git
   cd campers
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Development mode:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in Chrome.

4. **Production build:**
   ```bash
   npm run build
   ```
   Static files are written to `out/`. For GitHub Pages:
   ```bash
   GITHUB_PAGES=true npm run build
   ```

5. **Lint:**
   ```bash
   npm run lint
   ```

---

## 📁 Project structure

```
campers/
├── app/
│   ├── catalog/
│   │   ├── [camperId]/page.tsx   # Camper details
│   │   └── page.tsx              # Catalog
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx                  # Home
├── components/
│   ├── BookingForm/
│   ├── CamperCard/
│   ├── CamperDetailsContent/
│   ├── CamperGallery/
│   ├── CatalogContent/
│   ├── CatalogFilters/
│   ├── Header/
│   ├── Loader/
│   ├── StarRating/
│   └── TanStackProvider/
├── lib/
│   ├── api.ts
│   └── formatters.ts
├── types/
│   └── camper.ts
├── public/
│   └── images/
├── assets/
│   └── screenshot.png
├── next.config.ts
├── package.json
└── tsconfig.json
```


## 👤 Author

**Mykola Vutov** — [VuToV-Mykola](https://github.com/VuToV-Mykola)

---


