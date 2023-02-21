const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    groupId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
