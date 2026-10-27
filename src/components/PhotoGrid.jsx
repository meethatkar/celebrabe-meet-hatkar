import { PhotoCard } from './PhotoCard'

/**
 * Layer 4: UI Components
 * Responsive Grid displaying photo cards.
 * - Desktop: 4 columns (lg:grid-cols-4)
 * - Tablet: 2 columns (sm:grid-cols-2)
 * - Mobile: 1 column (grid-cols-1)
 */
export function PhotoGrid({ photos, favourites, onToggleFavourite }) {
  if (photos.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <div className="w-16 h-16 mx-auto mb-4 text-slate-300 flex items-center justify-center rounded-full bg-slate-100">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-slate-700">No photos found</h3>
        <p className="text-sm text-slate-500 mt-1">Try adjusting your search for a different author.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavourite={favourites.includes(photo.id)}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </div>
  )
}
