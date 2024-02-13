module.exports = {
    apps : [{
      name: 'vector-stay-awake-job',
      script: 'schedule.js', // Replace with the path to your script
      instances: 1,
      autorestart: false,
      watch: false,
      exec_mode: 'fork',
      cron_restart: '0 0 * * 0', // This cron pattern means "At 00:00 on Sunday"
      interpreter: 'node@20.11.0',
    }]
  };
