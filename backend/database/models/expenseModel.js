const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;
