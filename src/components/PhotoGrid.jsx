import { PhotoCard } from "./PhotoCard";
import searchIcon from "../assets/search.svg";

/**
 * UI Components Layer
 * Responsive Grid displaying photo cards.
 */
export function PhotoGrid({ photos, favourites, onToggleFavourite }) {
  if (photos.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <div className="w-16 h-16 mx-auto mb-4 text-slate-300 flex items-center justify-center rounded-full bg-slate-100">
          <img
            src={searchIcon}
            alt=""
            className="w-8 h-8 opacity-60"
            aria-hidden="true"
          />
        </div>
        <h3 className="text-lg font-medium text-slate-700">No photos found</h3>
        <p className="text-sm text-slate-500 mt-1">
          Try adjusting your search for a different author.
        </p>
      </div>
    );
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
  );
}
