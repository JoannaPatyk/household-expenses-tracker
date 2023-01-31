const Budget = require('../../database/models/budgetModel');

class BudgetActions {
    async get(req, res) {
        const budget = await Budget.find({});

        res.status(200).json(budget);
    }

    async patch(req, res) {
        const amount = req.body.amount;
        const id = req.params.id;

        const budgetEntry = await Budget.findOne({ _id: id });
        budgetEntry.amount = amount;
        await budgetEntry.save();

        res.status(201).json(budgetEntry);
    }

    updateBudgetOnCategoryAddition = async (categoryName) => {
        const budgetEntry = new Budget({ categoryName: categoryName, amount: 0 });
        await budgetEntry.save();
    };

    updateBudgetOnCategoryDelete = async (categoryName) => {
        await Budget.deleteOne({ categoryName: categoryName });
    };

    updateBudgetOnCategoryUpdate = async (oldCategoryName, newCategoryName) => {
        await Budget.updateOne({ categoryName: oldCategoryName }, { categoryName: newCategoryName });
    };
}

module.exports = new BudgetActions();
