const Budget = require('../../../database/models/budgetModel');

class BudgetActions {
    getBudget = async (req, res) => {
        try {
            const groupId = req.userData.groupId;
            const budget = await Budget.find({ groupId: groupId });

            res.status(200).json(budget);
        } catch (error) {
            res.status(422).json({ message: error.message });
        }
    };

    updateBudget = async (req, res) => {
        try {
            const amount = req.body.amount;
            const id = req.params.id;

            const budgetEntry = await Budget.findOne({ _id: id });
            budgetEntry.amount = amount;
            await budgetEntry.save();

            res.status(201).json(budgetEntry);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    };

    updateBudgetOnCategoryAddition = async (categoryName, groupId) => {
        const budgetEntry = new Budget({ categoryName: categoryName, amount: 0, groupId: groupId });
        await budgetEntry.save();
    };

    updateBudgetOnCategoryDelete = async (categoryName, groupId) => {
        await Budget.deleteOne({ categoryName: categoryName, groupId: groupId });
    };

    updateBudgetOnCategoryUpdate = async (oldCategoryName, newCategoryName, groupId) => {
        await Budget.updateOne({ categoryName: oldCategoryName, groupId: groupId }, { categoryName: newCategoryName });
    };
}

module.exports = new BudgetActions();
