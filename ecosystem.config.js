module.exports = {
    apps : [{
      name: 'vector-stay-awake-job',
      script: 'nvm install 20; npm install; node schedule.js', // Replace with the path to your script
      instances: 1,
      autorestart: false,
      watch: false,
      cron_restart: '0 0 * * 0', // This cron pattern means "At 00:00 on Sunday"
    }]
  };
  