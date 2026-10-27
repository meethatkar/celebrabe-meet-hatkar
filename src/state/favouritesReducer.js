/**
 * State Management Layer
 * Dedicated reducer for managing the favourites state.
 */

export const STORAGE_KEY = "celebrare_photo_favourites";

export const FAVOURITES_ACTION_TYPES = {
  TOGGLE_FAVOURITE: "TOGGLE_FAVOURITE",
};

export const initialFavourites = [];

/**
 * Lazy initializer function for useReducer.
 * Synchronously reads stored favourite IDs from localStorage before the first render,
 * preventing layout shift or flickering hearts on initial mount.
 *
 * @param {Array} defaultVal
 * @returns {Array} Initialized array of favourite photo IDs
 */
export function initFavourites(defaultVal = initialFavourites) {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (error) {
    console.error("Failed to parse favourites from localStorage:", error);
  }
  return defaultVal;
}

/**
 * Pure reducer function to handle favourite toggles.
 *
 * @param {Array<string|number>} state - Array of photo IDs
 * @param {{ type: string, payload: string|number }} action
 * @returns {Array<string|number>} Updated array of photo IDs
 */
export function favouritesReducer(state, action) {
  switch (action.type) {
    case FAVOURITES_ACTION_TYPES.TOGGLE_FAVOURITE: {
      const id = action.payload;
      const isAlreadyFavourite = state.includes(id);

      if (isAlreadyFavourite) {
        return state.filter((favId) => favId !== id);
      } else {
        return [...state, id];
      }
    }

    default:
      return state;
  }
}
