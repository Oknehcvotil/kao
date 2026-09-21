# KAO Delivery

Frontend for the KAO Delivery corporate website.

## Stack

- React
- Vite
- Framer Motion
- Lucide React

## Project structure

```
src/
├── components/
│   ├── AboutSection.jsx
│   ├── AdvantagesSection.jsx
│   ├── ContactsSection.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── LanguageSwitch.jsx
│   ├── Logo.jsx
│   ├── QuoteSection.jsx
│   ├── Reveal.jsx
│   └── ServicesSection.jsx
├── config/
│   └── site.js
├── data/
│   └── content.js
├── App.jsx
├── main.jsx
└── styles.css
```

`App.jsx` only composes the page and controls the current language.

Static company links and contact details are stored in `src/config/site.js`.
Ukrainian and English content is stored in `src/data/content.js`.
Each page section is isolated in `src/components`.

## Local development

```bash
npm install
cp .env.example .env
npm run dev
```

Set the backend URL in `.env`:

```env
VITE_API_URL=http://localhost:5000
```

## Production

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`.

The quote form sends a `POST /api/quote` request to the KAO Delivery backend.
