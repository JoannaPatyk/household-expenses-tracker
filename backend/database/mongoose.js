const mongoose = require('mongoose');
const { database_uri } = require('../config');

mongoose.set('strictQuery', true).connect(database_uri);
