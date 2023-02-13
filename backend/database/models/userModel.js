const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
