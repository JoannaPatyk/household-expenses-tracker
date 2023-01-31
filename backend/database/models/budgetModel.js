const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    amount: {
        type: Number
    }
});

const Budget = mongoose.model('Budget', BudgetSchema);

module.exports = Budget;
