import heartFilledIcon from '../assets/heart-filled.svg'
import heartOutlineIcon from '../assets/heart-outline.svg'
import { Button } from './Button'

/**
 * UI Components Layer
 * Individual photo card showing image, author name, and favourite toggle button.
 */

export function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  // Using optimized web resolution for snappy loading, falling back to download_url
  const optimizedUrl = `https://picsum.photos/id/${photo.id}/600/400`;

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
              e.currentTarget.src = photo.download_url;
            }
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Favorite Heart Button Overlay */}
        <Button
          variant="icon"
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={
            isFavourite
              ? `Remove photo by ${photo.author} from favourites`
              : `Add photo by ${photo.author} to favourites`
          }
          className="absolute top-3 right-3 p-2.5"
        >
          <img
            src={isFavourite ? heartFilledIcon : heartOutlineIcon}
            alt=""
            className="w-5 h-5 transition-transform duration-200"
            aria-hidden="true"
          />
        </Button>
      </div>

      {/* Card Details */}
      <div className="p-4 flex items-center justify-between">
        <div className="truncate">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">
            Photographer
          </p>
          <h2
            className="text-base font-semibold text-slate-800 truncate"
            title={photo.author}
          >
            {photo.author}
          </h2>
        </div>
      </div>
    </article>
  );
}
