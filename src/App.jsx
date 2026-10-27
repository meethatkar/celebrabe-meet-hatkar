import { useState, useReducer, useEffect, useCallback, useMemo } from 'react'
import { useFetchPhotos } from './hooks/useFetchPhotos'
import {
  favouritesReducer,
  initialFavourites,
  initFavourites,
  FAVOURITES_ACTION_TYPES,
  STORAGE_KEY,
} from './state/favouritesReducer'
import { SearchBar } from './components/SearchBar'
import { PhotoGrid } from './components/PhotoGrid'
import { LoadingSpinner } from './components/LoadingSpinner'
import { ErrorMessage } from './components/ErrorMessage'

export default function App() {
  // Requirement 6: Custom Hook for fetching data, loading & error states
  const { photos, loading, error } = useFetchPhotos()

  // Search input state
  const [searchQuery, setSearchQuery] = useState('')

  // Requirement 5: useReducer with lazy initialization from localStorage
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    initialFavourites,
    initFavourites
  )

  // Requirement 5: Sync favourites state to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites))
    } catch (err) {
      console.error('Failed to persist favourites to localStorage:', err)
    }
  }, [favourites])

  // Requirement 7: useCallback on search filter handler
  const handleSearch = useCallback((e) => {
    setSearchQuery(e.target.value)
  }, [])

  // Toggle favourite action dispatcher
  const handleToggleFavourite = useCallback((id) => {
    dispatch({
      type: FAVOURITES_ACTION_TYPES.TOGGLE_FAVOURITE,
      payload: id,
    })
  }, [])

  // Requirement 7: useMemo to compute filtered photos list
  const filteredPhotos = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return photos
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(query)
    )
  }, [photos, searchQuery])

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

        {/* Requirement 4 & 7: Real-time search filter */}
        <SearchBar value={searchQuery} onChange={handleSearch} />

        {/* Main Content Area */}
        <main>
          {loading && <LoadingSpinner />}

          {!loading && error && (
            <ErrorMessage
              message={error}
              onRetry={() => window.location.reload()}
            />
          )}

          {/* Requirement 3: Responsive photo grid (4 cols desktop, 2 tablet, 1 mobile) */}
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
  )
}
