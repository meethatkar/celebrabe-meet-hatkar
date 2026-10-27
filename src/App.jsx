import { useState, useReducer, useEffect, useCallback, useMemo } from "react";
import { useFetchPhotos } from "./hooks/useFetchPhotos";
import {
  favouritesReducer,
  initialFavourites,
  initFavourites,
  FAVOURITES_ACTION_TYPES,
  STORAGE_KEY,
} from "./state/favouritesReducer";
import { SearchBar } from "./components/SearchBar";
import { PhotoGrid } from "./components/PhotoGrid";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { ErrorMessage } from "./components/ErrorMessage";

export default function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchQuery, setSearchQuery] = useState("");

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    initialFavourites,
    initFavourites,
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
    } catch (err) {
      console.error("Failed to persist favourites to localStorage:", err);
    }
  }, [favourites]);

  // useCallback on search filter handler
  const handleSearch = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  // Toggle favourite action dispatcher
  const handleToggleFavourite = useCallback((id) => {
    dispatch({
      type: FAVOURITES_ACTION_TYPES.TOGGLE_FAVOURITE,
      payload: id,
    });
  }, []);

  // useMemo to compute filtered photos list
  const filteredPhotos = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return photos;
    return photos.filter((photo) => photo.author.toLowerCase().includes(query));
  }, [photos, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Photo Gallery
          </h1>
          <p className="mt-2 text-base text-slate-600">
            Explore photos from talented creators worldwide
          </p>
        </header>

        <SearchBar value={searchQuery} onChange={handleSearch} />

        <main>
          {loading && <LoadingSpinner />}

          {!loading && error && (
            <ErrorMessage
              message={error}
              onRetry={() => window.location.reload()}
            />
          )}

          {!loading && !error && (
            <PhotoGrid
              photos={filteredPhotos}
              favourites={favourites}
              onToggleFavourite={handleToggleFavourite}
            />
          )}
        </main>
      </div>
    </div>
  );
}
