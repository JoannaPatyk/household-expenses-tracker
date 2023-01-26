const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

const Budget = mongoose.model('Budget', BudgetSchema);

module.exports = Budget;
