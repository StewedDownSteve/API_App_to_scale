// Import necessary modules and files
import express from 'express';
import { fetchRandomImage } from './api/fetchImages.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name from the URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// ------- Took out rateLimiter, will play with it later on 9/12-------
// Import CommonJS module dynamically
// const rateLimiter = (await import('./middlewares/rateLimiter.js')).default;

// Apply the rate limiter middleware to all routes
// app.use(rateLimiter);



// Routes
app.get('/random-image', async (req, res) => {
    const imageUrl = await fetchRandomImage();
    res.send(`<img src="${imageUrl}" alt="Random Image"/>`);
});

app.get('/random-images', async (req, res) => {
    const count = req.query.count || 5;
    const images = await Promise.all(Array(Number(count)).fill(fetchRandomImage()));
    res.json(images);
});

// Serve static frontend files from the 'public' folder
app.use(express.static(path.join(__dirname, '../public')));

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
