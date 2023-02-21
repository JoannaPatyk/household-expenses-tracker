const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    amount: {
        type: Number
    },
    groupId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});

const Budget = mongoose.model('Budget', BudgetSchema);

module.exports = Budget;
