// Import node-fetch using ES Module syntax
import fetch from 'node-fetch';

// Function to fetch random image from API
export async function fetchRandomImage() {
    try {
        const response = await fetch('https://picsum.photos/200/300');
        return response.url; // Return URL of fetched image
    } catch (error) {
        console.error('Error fetching image:', error);
        return null; // Return null if there was an error
    }
}
