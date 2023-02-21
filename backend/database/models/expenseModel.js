const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    comment: {
        type: String
    },
    groupId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;
