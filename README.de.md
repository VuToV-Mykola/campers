### 🌐 Sprache wählen

[🇺🇦 Українська](README.md) | [🇬🇧 English](README.en.md) | [🇩🇪 Deutsch](README.de.md)

<!-- AUTOGEN:STATS -->
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/) [![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/) [![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)](https://swiperjs.com/) [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/) [![Terminal](https://img.shields.io/badge/Terminal-000000?style=for-the-badge&logo=windows-terminal&logoColor=white)](https://docs.microsoft.com/en-us/windows/terminal/) [![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/) [![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/) [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/) [![Squoosh](https://img.shields.io/badge/Squoosh-4285F4?style=for-the-badge)](https://squoosh.app/) 

[![📊 Views](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/campers/main/assets/db/visitors-badge.json)](https://github.com/VuToV-Mykola/campers/graphs/traffic)
[![⭐ Stars](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/campers/main/assets/db/likes-badge.json)](https://github.com/VuToV-Mykola/campers/actions/workflows/screenshot-and-visitor.yaml)
[![👥 Contributors](https://img.shields.io/github/contributors/VuToV-Mykola/campers?style=for-the-badge&logo=github&color=blue)](https://github.com/VuToV-Mykola/campers/graphs/contributors)
[![📦 Size](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/campers/main/assets/db/repo-size.json)](https://github.com/VuToV-Mykola/campers)
[![📄 License](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/campers/main/assets/db/repo-license.json)](https://github.com/VuToV-Mykola/campers/blob/main/LICENSE)


## 👥 Mitwirkende
[![Contributors](https://contrib.rocks/image?repo=VuToV-Mykola/campers&max=20)](https://github.com/VuToV-Mykola/campers/graphs/contributors)
<!-- END:AUTOGEN -->

---

## 📌 Projektname

**TravelTrucks** — Frontend-Webanwendung für Camper-Vermietung. 

---

## 🎯 Über das Projekt

**TravelTrucks** ist die Client-Anwendung eines Camper-Buchungsservices. Nutzer können den Katalog durchsuchen, Filter anwenden, weitere Karten laden, Camper-Details mit Galerie und Bewertungen öffnen und eine Buchungsanfrage senden.

**Design:** [Campers (Figma)](https://www.figma.com/design/q9il1hHac6kzbFAoxWSxet/Campers--Copy-?node-id=48730-474&m=dev)

**API:** [Campers API](https://campers-api.goit.study)

---

## ✨ Hauptfunktionen

| Seite | Route | Funktionen |
|-------|-------|------------|
| Home | `/` | Hero-Banner, **View Now** → Katalog |
| Catalog | `/catalog` | Camper-Liste, Filter, **Load More** (je 4), Loader |
| Camper details | `/catalog/[camperId]` | Swiper-Galerie, Bewertungen, Buchungsformular |

---

## 🛠 Technologien

| Kategorie | Stack |
|-----------|-------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Sprache | [TypeScript](https://www.typescriptlang.org/) |
| Styles | CSS Modules |
| Daten | [TanStack Query](https://tanstack.com/query) (`useInfiniteQuery`) |
| HTTP | [Axios](https://axios-http.com/) |
| UI | [React Icons](https://react-icons.github.io/react-icons/), [Swiper](https://swiperjs.com/), [react-hot-toast](https://react-hot-toast.com/) |

---

## 🚀 Installation und Nutzung

1. **Repository klonen:**
   ```bash
   git clone git@github.com:VuToV-Mykola/campers.git
   cd campers
   ```

2. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

3. **Entwicklungsmodus:**
   ```bash
   npm run dev
   ```
   [http://localhost:3000](http://localhost:3000) in Chrome öffnen.

4. **Produktions-Build:**
   ```bash
   npm run build
   ```
   Statische Dateien liegen in `out/`. Für GitHub Pages:
   ```bash
   GITHUB_PAGES=true npm run build
   ```

5. **Lint:**
   ```bash
   npm run lint
   ```

---

## 📁 Projektstruktur

```
campers/
├── app/
│   ├── catalog/
│   │   ├── [camperId]/page.tsx   # Camper-Details
│   │   └── page.tsx              # Katalog
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



## 👤 Autor

**Mykola Vutov** — [VuToV-Mykola](https://github.com/VuToV-Mykola)

---

