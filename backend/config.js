const process = require('dotenv').config();

module.exports = {
    server_host: process.env.SERVER_HOST || 'localhost',
    server_port: process.env.SERVER_PORT || 3000,
    database_uri: process.env.MONGO_ATLAS_DATABASE_URI || 'mongodb://127.0.0.1:27017'
};
