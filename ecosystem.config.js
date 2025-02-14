module.exports = {
  apps: [
    {
      name: 'khub',
      script: 'start-script.sh',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env_homolog: {
        NODE_ENV: 'homolog',
      },
    },
  ],

  deploy: {
    homolog: {
      user: 'root',
      host: '104.251.216.111',
      ref: 'origin/main',
      ssh_options: 'StrictHostKeyChecking=no',
      path: '/var/www/khub',
    },
  },
};
