const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { env } = require('node:process');

dotenv.config();

mongoose.set('strictQuery', false);
mongoose.connect(env.DATABASE);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`Connection to database succeeded: ${connection.host}:${connection.port}/${connection.name}`);
});

connection.on('error', (err) => {
    console.error('Connection to database failed:', err);
});
