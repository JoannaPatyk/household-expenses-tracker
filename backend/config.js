const dotenv = require('dotenv');
const { env } = require('node:process');

dotenv.config();

module.exports = {
    server_host: env.SERVER_HOST || 'localhost',
    server_port: env.SERVER_PORT || 5000,
    database_uri: env.MONGO_ATLAS_DATABASE_URI || 'mongodb://127.0.0.1:27017'
};
