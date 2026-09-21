# KAO Delivery — Frontend

React/Vite website for **KAO Delivery** based on the approved Canva visual direction.

## Included

- Ukrainian (default) + English language switcher
- Responsive landing page
- Lightweight Framer Motion reveal animations with reduced-motion support
- Services: freight forwarding, customs brokerage, ocean freight, road delivery with own fleet
- Quote form connected to the backend API
- Office contacts and embedded map
- Basic SEO / Open Graph metadata

## Local development

```bash
npm install
cp .env.example .env
npm run dev
```

Set the API URL in `.env`:

```env
VITE_API_URL=http://localhost:5000
```

For production, point `VITE_API_URL` to the deployed backend, for example:

```env
VITE_API_URL=https://api.kao.delivery
```

## Build

```bash
npm run build
npm run preview
```

## Main files

- `src/App.jsx` — page sections, bilingual copy and form logic
- `src/styles.css` — full visual system and responsive styles
- `src/main.jsx` — React entry
- `index.html` — SEO metadata

The quote form sends `POST /api/quote` to the backend repository.
