const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    groupName: {
        type: String
    },
    members: {
        type: Array(mongoose.Schema.Types.ObjectId),
        ref: 'User'
    }
});

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
