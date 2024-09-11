// Import the express-rate-limit module
const rateLimit = require('express-rate-limit');

// This creates the limiter and configures it
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute (in milliseconds)
    max: 10, // Limit each IP to 10 requests per window
    message: 'Too many requests, please try again later.', // Error message for rate limit exceeded
});

// Export the rate limiter middleware
module.exports = limiter;
