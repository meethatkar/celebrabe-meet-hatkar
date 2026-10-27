/**
 * Layer 1: Services
 * Handles raw HTTP requests to remote APIs.
 */

const PICSUM_API_URL = 'https://picsum.photos/v2/list?limit=30'

/**
 * Fetches 30 photos from the Picsum Photos API.
 * @param {AbortSignal} [signal] - Optional abort signal for request cancellation
 * @returns {Promise<Array>} Array of photo objects
 */
export async function getPhotos(signal) {
  const response = await fetch(PICSUM_API_URL, { signal })

  if (!response.ok) {
    throw new Error(`Failed to fetch photos: HTTP status ${response.status}`)
  }

  return response.json()
}
