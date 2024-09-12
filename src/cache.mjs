// src/cache.mjs

// Import the function to fetch random images from the functions file
import { fetchRandomImage } from './api/fetchImages.mjs'; 

// creating a blank object to store the img URL and timestamp
let cache = {};

// Function to fetch an image with caching
// use built in Date.now() and minus that from the cache/timestamp
export async function fetchCachedImage() {
    // Check if the image is in the cache and is not older than 1 minute
    if (cache.image && (Date.now() - cache.timestamp < 60000)) {
        return cache.image; 
    }

    
    // Fetch a new image if cache is expired or empty
    // cache is then updated w/ new URL and a time stamp
    // This means any request in the next minute will use the cahced img
    const image = await fetchRandomImage();
    cache = { image, timestamp: Date.now() };
    return image;
}
