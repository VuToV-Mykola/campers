# Contributing / Внесок до проєкту

Дякуємо за інтерес до **TravelTrucks**. Ось як внести свій внесок.

## Як внести внесок

### 1. Клонування та гілка

```bash
git clone https://github.com/VuToV-Mykola/campers.git
cd campers
git checkout -b feature/назва-фічі
```

### 2. Встановлення залежностей

```bash
npm install
```

### 3. Розробка

```bash
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000) у Chrome.

- Дотримуйтесь макета [Campers (Figma)](https://www.figma.com/design/q9il1hHac6kzbFAoxWSxet/Campers--Copy-?node-id=48730-474&m=dev)
- Використовуйте CSS Modules, App Router, TypeScript
- Перевіряйте фільтрацію, Load More та форму бронювання

### 4. Коміт

```bash
git add .
git commit -m "[feat] Короткий опис змін"
```

**Типи комітів:** `feat`, `fix`, `style`, `docs`, `refactor`

### 5. Push та Pull Request

```bash
git push origin feature/назва-фічі
```

Потім відкрийте Pull Request на GitHub з описом змін.

## Чекліст перед PR

- [ ] `npm run build` проходить без помилок
- [ ] `npm run lint` без критичних попереджень
- [ ] Немає помилок у консолі браузера
- [ ] Фільтрація та пагінація працюють коректно
- [ ] Немає `console.log` у production-коді

## Питання

Створіть [Issue](https://github.com/VuToV-Mykola/campers/issues) для обговорення.
