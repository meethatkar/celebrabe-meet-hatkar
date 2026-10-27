const PICSUM_API_URL = "https://picsum.photos/v2/list?limit=30";

/**
 * Fetches 30 photos from the Picsum Photos API.
 * @returns {Promise<Array>} Array of photo objects
 */
export async function getPhotos() {
  const response = await fetch(PICSUM_API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch photos: HTTP status ${response.status}`);
  }

  return response.json();
}
