import { useState, useEffect } from 'react'
import { getPhotos } from '../services/api'

/**
 * Layer 2: Custom Hook
 * Encapsulates the asynchronous data fetching logic for photos.
 * 
 * @returns {{ photos: Array, loading: boolean, error: string | null }}
 */
export function useFetchPhotos() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadPhotos() {
      try {
        setLoading(true)
        setError(null)
        const data = await getPhotos(controller.signal)
        setPhotos(data)
      } catch (err) {
        // Ignore aborted requests to prevent setting state on unmounted component
        if (err.name === 'AbortError') return
        setError(err.message || 'An unexpected error occurred while loading photos.')
      } finally {
        setLoading(false)
      }
    }

    loadPhotos()

    return () => {
      controller.abort()
    }
  }, [])

  return { photos, loading, error }
}
