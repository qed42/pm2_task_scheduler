# PM2 Weekly Task Scheduler

This project consists of a Node.js script that performs HTTP requests to configurable URLs with dynamically generated random text. It's designed to run once a week, using PM2 for process management and scheduling.

## Features
- Dynamic Text Generation: Generates a random string (20-30 characters) for each execution.
- Environment Variable Configuration: URLs and the number of executions are configurable via .env file.
- Scheduled Execution: Utilizes PM2's cron feature to run the script once a week.

## Prerequisites
- Node.js
- npm or yarn
- PM2 (npm install pm2 -g)

## Setup

- Install Dependencies `npm install`

- Configure Environment Variables: Create a .env file in the project root with the following content, adjusting values as necessary:

```
SCHEDULE_URL_1=http://example.com/path?q=[TEXT]
SCHEDULE_URL_2=http://anotherexample.com/path?query=[TEXT]
SCHEDULE_COUNT=3
```

- PM2 Configuration: Ensure ecosystem.config.js is set up for your project (see example provided in the project documentation).
- Start the scheduled task with PM2: `pm2 start ecosystem.config.js`
- Save PM2 process list (to restart tasks after reboot): `pm2 save`

## Contributing
Feel free to fork this project and submit pull requests with improvements or report any issues you encounter.

## License
This project is open-source and available under the MIT License.

# Completly written by GPT-4
