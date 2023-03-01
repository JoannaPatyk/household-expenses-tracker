const Expense = require('../../../database/models/expenseModel');
const User = require('../../../database/models/userModel');

class ExpenseActions {
    getExpenses = async (req, res) => {
        try {
            const groupId = req.userData.groupId;
            const expenses = await Expense.find({ groupId: groupId });

            res.status(200).json(expenses);
        } catch (error) {
            res.status(422).json({ message: error.message });
        }
    };

    addExpense = async (req, res) => {
        try {
            const email = req.userData.email;
            const groupId = req.userData.groupId;
            const category = req.body.category;
            const amount = req.body.amount;
            const comment = req.body.comment;

            const user = await User.findOne({ email: email });
            const name = user.name;

            const now = new Date();
            const date = now.getTime();

            const expense = new Expense({ name, date, category, amount, comment, groupId });
            await expense.save();

            res.status(201).json(expense);
        } catch (error) {
            return res.status(422).json({ message: error.message });
        }
    };

    updateExpense = async (req, res) => {
        try {
            const id = req.params.id;
            const category = req.body.category;
            const amount = req.body.amount;
            const comment = req.body.comment;

            const expense = await Expense.findOne({ _id: id });
            expense.category = category;
            expense.amount = amount;
            expense.comment = comment;
            await expense.save();

            res.status(201).json(expense);
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    };

    deleteExpense = async (req, res) => {
        try {
            const id = req.params.id;
            await Expense.deleteOne({ _id: id });

            res.sendStatus(204);
        } catch (error) {
            return res.status(422).json({ message: error.message });
        }
    };

    updateExpenseOnCategoryUpdate = async (oldCategoryName, newCategoryName, groupId) => {
        await Expense.updateMany({ category: oldCategoryName, groupId: groupId }, { category: newCategoryName });
    };
}

module.exports = new ExpenseActions();
