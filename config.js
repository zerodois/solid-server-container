const fs = require('fs');

const env = (name, def) => process.env[name] || def;

const config = {
  root: '/usr/app/data',
  port: env('SOLID_PORT', '443'),
  serverUri: env('SOLID_URL', 'https://me.solid'),
  webid: true,
  mount: '/',
  configPath: './config',
  configFile: './config.json',
  dbPath: './.db',
  sslKey: './key.pem',
  sslCert: './cert.pem',
  multiuser: false,
  server: {
    name: 'localhost',
    description: '',
    logo: ''
  }
};

fs.writeFileSync('config.json', JSON.stringify(config, null, 2), 'utf8');
