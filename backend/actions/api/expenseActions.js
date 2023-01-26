const Expense = require('../../database/models/expenseModel');

class ExpenseActions {
    async save(req, res) {
        const amount = req.body.amount;
        let expense;

        try {
            expense = new Expense({ amount });
            await expense.save();
        } catch (error) {
            return res.status(422).json({ message: error.message });
        }

        res.status(201).json(expense);
    }

    async get(req, res) {
        const expenses = await Expense.find({});

        res.status(200).json(expenses);
    }

    async update(req, res) {
        const amount = req.body.amount;
        const id = req.params.id;

        const expense = await Expense.findOne({ _id: id });
        expense.amount = amount;
        await expense.save();

        res.status(201).json(expense);
    }

    async delete(req, res) {
        const id = req.params.id;
        await Expense.deleteOne({ _id: id });
        res.sendStatus(204);
    }
}

module.exports = new ExpenseActions();
