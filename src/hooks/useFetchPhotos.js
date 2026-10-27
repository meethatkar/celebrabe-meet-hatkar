import { useState, useEffect } from "react";
import { getPhotos } from "../services/api";

/**
 * Custom Hook Layer
 * Encapsulates the asynchronous data fetching logic for photos.
 *
 * @returns {{ photos: Array, loading: boolean, error: string | null }}
 */
export function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPhotos() {
      try {
        setLoading(true);
        setError(null);
        const data = await getPhotos();
        setPhotos(data);
      } catch (err) {
        setError(
          err.message || "An unexpected error occurred while loading photos.",
        );
      } finally {
        setLoading(false);
      }
    }

    loadPhotos();
  }, []);

  return { photos, loading, error };
}
