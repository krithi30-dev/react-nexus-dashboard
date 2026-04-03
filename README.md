# React Nexus Dashboard — React Admin UI

A clean, modern React admin dashboard

## Tech Stack
- React 18 (functional components + hooks)
- Plain CSS with CSS custom properties (no extra frameworks needed)
- Lucide React icons (optional — already inlined as SVG)

## Features
- Responsive sidebar (collapses on mobile with overlay)
- 4 animated stat cards with loading skeletons
- Sortable data table with status badges and avatar initials
- Revenue sparkline chart (pure SVG)
- Activity feed
- Navbar with search, notifications, and avatar
- Smooth hover animations throughout

## Folder Structure

```
src/
├── App.jsx                  ← Root component + dashboard layout
├── index.js                 ← Entry point
├── styles/
│   └── global.css           ← All styles (CSS custom properties)
├── components/
│   ├── Sidebar.jsx          ← Navigation sidebar
│   ├── Navbar.jsx           ← Top navigation bar
│   ├── StatCard.jsx         ← Summary stat card + skeleton
│   ├── DataTable.jsx        ← Sortable data table
│   └── MiniChart.jsx        ← Bar sparkline widget
└── data/
    └── sampleData.js        ← All dummy data
```

## Getting Started

```bash
# 1. Create a new React app
npx create-react-app react-nexus-dashboard
cd react-nexus-dashboard

# 2. Replace the src/ folder with the provided src/
# (copy all files from this project's src/ into the new app's src/)

# 3. Install dependencies
npm install

# 4. Start the dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customisation
- Colors: edit CSS custom properties in `src/styles/global.css` (`:root` block)
- Data: update `src/data/sampleData.js` with your own values
- Add pages: extend the `PAGE_META` object and add page components in `App.jsx`

## Notes
- No backend or API calls — all data is static dummy data
- Skeleton loading is simulated with a 1.6s timeout
- Table supports click-to-sort on all columns
