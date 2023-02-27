const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    members: {
        type: Array(mongoose.Schema.Types.ObjectId),
        ref: 'User'
    },
    invitations: {
        type: Array(mongoose.Schema.Types.ObjectId),
        ref: 'User'
    }
});

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
