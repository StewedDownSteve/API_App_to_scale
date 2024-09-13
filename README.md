#### To Run
npm install -> npm start
localhost:3000


# Random Image Fetcher - Performance Optimization and Caching

## Project Overview

The Random Image Fetcher is a simple application designed to fetch random images from an API. The project aims to explore and address real-world challenges related to handling multiple requests and optimizing performance. I wanted to work on a project that helps me learn about and improve how apps manage different performance challenges, particularly focusing on caching and handling concurrent requests.

![img of UI](https://github.com/StewedDownSteve/API_App_to_scale/blob/main/API-App-Scale-BootS-SH.png)



## Tech Stack

- **Node.js**: server-side development.
- **JavaScript**: application logic.
- **Express**: server-side
- **Apache Benchmark**:  used for load testing to evaluate performance.
- **Bootstrap**:  front end.
- **HTML**: structure of the front end.

## Caching Strategy

To optimize performance, the application implements a caching mechanism:
- **Caching Duration**: Images are cached for up to one minute.
- **Functionality**: If an image is already cached, it is served from the cache rather than making a new API request. This reduces the number of requests to the API and speeds up response times.


## Future Plans
- Cache Improvements: Enhance the caching strategy to handle a larger number of requests efficiently.
- Performance Tuning: Aim to improve performance to handle a few hundred requests easily and quickly.
## Key Takeaway
- Caching: Effective caching can greatly improve performance and scalability by reducing redundant API requests.
- Async/Await: Understanding and using async/await for handling asynchronous operations is crucial for performance.
- API Handling: Proper handling of API calls, including managing request rates and optimizing responses, is essential for building scalable applications.


