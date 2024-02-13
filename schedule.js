require('dotenv').config();
const axios = require('axios');
const crypto = require('crypto');

// Generate a random text of 20-30 characters long
const generateRandomText = () => {
    const length = Math.floor(Math.random() * 11) + 20; // Random length between 20 and 30
    return crypto.randomBytes(length).toString('hex').substr(0, length);
};

// Function to make the request
const makeRequest = (url) => {
    axios.get(url)
        .then(response => {
            console.log(`Response from ${url}:`, response.data);
        })
        .catch(error => {
            console.error(`Error from ${url}:`, error);
        });
};

// Extract the number of times to run the job from environment variable
const scheduleCount = parseInt(process.env.SCHEDULE_COUNT, 10) || 1; // Default to 1 if not specified or invalid

// Main loop to run the job `scheduleCount` times
for (let i = 0; i < scheduleCount; i++) {
    const randomText = generateRandomText();

    // Read environment variables starting with SCHEDULE_URL and replace [TEXT] with randomText
    const scheduleUrls = Object.keys(process.env)
        .filter(key => key.startsWith('SCHEDULE_URL_'))
        .map(key => process.env[key].replace('[TEXT]', encodeURIComponent(randomText))); // Ensure the text is URL-encoded

    // Iteratively make requests for all URLs
    scheduleUrls.forEach(url => makeRequest(url));
}
