const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    }
});

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;
