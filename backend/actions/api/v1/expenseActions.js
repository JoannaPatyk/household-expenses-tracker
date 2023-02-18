const Expense = require('../../../database/models/expenseModel');
const User = require('../../../database/models/userModel');

class ExpenseActions {
    async save(req, res) {
        const email = req.userData.email;
        const user = await User.findOne({ email });
        const name = user.name;

        const now = new Date();
        const date = now.getTime();

        const category = req.body.category;
        const amount = req.body.amount;
        const comment = req.body.comment;
        let expense;

        try {
            expense = new Expense({ name, date, category, amount, comment });
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
    }

    async delete(req, res) {
        const id = req.params.id;
        await Expense.deleteOne({ _id: id });

        res.sendStatus(204);
    }

    updateExpenseOnCategoryUpdate = async (oldCategoryName, newCategoryName) => {
        await Expense.updateMany({ category: oldCategoryName }, { category: newCategoryName });
    };
}

module.exports = new ExpenseActions();
