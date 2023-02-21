const Category = require('../../../database/models/categoryModel');
const budgetActions = require('./budgetActions');
const expenseActions = require('./expenseActions');

class CategoryActions {
    async save(req, res) {
        const name = req.body.name;
        const groupId = req.userData.groupId;

        let category;

        try {
            category = new Category({ name, groupId });
            await category.save();
        } catch (err) {
            return res.status(422).json({ message: err.message });
        }

        res.status(201).json(category);
        budgetActions.updateBudgetOnCategoryAddition(name, groupId);
    }

    async get(req, res) {
        const groupId = req.userData.groupId;
        const categories = await Category.find({ groupId });

        res.status(200).json(categories);
    }

    async update(req, res) {
        const name = req.body.name;
        const id = req.params.id;
        const groupId = req.userData.groupId;

        const category = await Category.findOne({ _id: id });
        const oldName = category.name;
        category.name = name;
        await category.save();

        res.status(201).json(category);

        budgetActions.updateBudgetOnCategoryUpdate(oldName, name, groupId);
        expenseActions.updateExpenseOnCategoryUpdate(oldName, name, groupId);
    }

    async delete(req, res) {
        const id = req.params.id;
        const category = await Category.findOne({ _id: id });
        const groupId = req.userData.groupId;

        await Category.deleteOne({ _id: id });
        res.sendStatus(204);

        budgetActions.updateBudgetOnCategoryDelete(category.name, groupId);
    }
}

module.exports = new CategoryActions();
