// src/cache.mjs

// Import the function to fetch random images
import { fetchRandomImage } from './api/fetchImages.mjs'; 

let cache = {};

// Function to fetch an image with caching
export async function fetchCachedImage() {
    // Check if the image is in the cache and is not older than 1 minute
    if (cache.image && (Date.now() - cache.timestamp < 60000)) {
        return cache.image; 
    }
    
    // Fetch a new image if cache is expired or empty
    const image = await fetchRandomImage();
    cache = { image, timestamp: Date.now() };
    return image;
}
