/**
 * Layer 4: UI Components
 * Individual photo card showing image, author name, and favourite toggle button.
 */

export function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  // Using optimized web resolution for snappy loading, falling back to download_url
  const optimizedUrl = `https://picsum.photos/id/${photo.id}/600/400`

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Photo Image Container */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        <img
          src={optimizedUrl}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          onError={(e) => {
            // Fallback to raw download_url if optimized size fails
            if (e.currentTarget.src !== photo.download_url) {
              e.currentTarget.src = photo.download_url
            }
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Favorite Heart Button Overlay */}
        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={isFavourite ? `Remove photo by ${photo.author} from favourites` : `Add photo by ${photo.author} to favourites`}
          className="absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md bg-white/80 hover:bg-white text-slate-700 shadow-md transition-all active:scale-90"
        >
          {/* Raw Inline SVG Heart Icon (Zero external libraries) */}
          <svg
            className={`w-5 h-5 transition-colors duration-200 ${
              isFavourite
                ? 'fill-rose-500 text-rose-500'
                : 'fill-transparent text-slate-500 hover:text-rose-500'
            }`}
            stroke="currentColor"
            strokeWidth={isFavourite ? '0' : '2'}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>
      </div>

      {/* Card Details */}
      <div className="p-4 flex items-center justify-between">
        <div className="truncate">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">Photographer</p>
          <h2 className="text-base font-semibold text-slate-800 truncate" title={photo.author}>
            {photo.author}
          </h2>
        </div>
      </div>
    </article>
  )
}
