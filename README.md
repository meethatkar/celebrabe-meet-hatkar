# Photo Gallery Web App

A clean, responsive Photo Gallery Web App built with **React**, **Vite**, and **Tailwind CSS**. Built for the Celebrare Frontend Internship Pre-Screening Assignment.

---

## 🚀 Features & Scope (Strict 7 Requirements)

1. **Project Setup**: Built from scratch with React + Vite + Tailwind CSS. Zero external UI component or icon libraries (pure Tailwind & raw SVGs).
2. **Fetch Photos from API**: Asynchronously loads 30 photos on mount from the [Picsum Photos API](https://picsum.photos/v2/list?limit=30) with explicit loading spinner and error handling states.
3. **Responsive Grid**:
   - Desktop (`lg:grid-cols-4`): 4 columns
   - Tablet (`sm:grid-cols-2`): 2 columns
   - Mobile (`grid-cols-1`): 1 column
   - Each card displays the image, photographer/author name, and a heart button.
4. **Real-time Search Filter**: Client-side filtering by author name as you type without extra API calls or page reloads.
5. **Favourites with `useReducer` & `localStorage`**:
   - Manages favourited photo IDs using `useReducer` (no `useState`).
   - Synchronous lazy initialization from `localStorage` prevents flickering on mount.
   - Updates persist across page refreshes.
6. **Custom Hook (`useFetchPhotos`)**:
   - Cleanly encapsulates data fetching logic in `src/hooks/useFetchPhotos.js`.
   - Returns `{ photos, loading, error }`.
7. **Performance Optimization (`useCallback` + `useMemo`)**:
   - `useCallback` wraps the search input change handler to preserve its reference across re-renders.
   - `useMemo` computes the filtered photos list, preventing expensive `.filter()` passes on re-renders unrelated to search or fetched data.

---

## 🏛️ 4-Layer Architecture

```
src/
├── services/
│   └── api.js                  # Remote data fetching service
├── hooks/
│   └── useFetchPhotos.js       # Custom hook managing photos, loading, and error states
├── state/
│   └── favouritesReducer.js    # useReducer action types, reducer, and localStorage init
├── components/
│   ├── SearchBar.jsx           # Search input with raw inline SVG icons
│   ├── PhotoCard.jsx           # Card with photo, author, and interactive heart toggle
│   ├── PhotoGrid.jsx           # 1/2/4 column responsive layout
│   ├── LoadingSpinner.jsx      # Animated SVG loading spinner
│   └── ErrorMessage.jsx        # Error notification component
├── App.jsx                     # Top-level composition & performance hooks
├── main.jsx                    # Application entry point
└── index.css                   # Tailwind CSS imports & base styles
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd celebrare
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Lint check**:
   ```bash
   npm run lint
   ```
