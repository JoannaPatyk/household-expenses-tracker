const Category = require('../../database/models/categoryModel');
const budgetActions = require('./budgetActions');
const expenseActions = require('./expenseActions');

class CategoryActions {
    async save(req, res) {
        const name = req.body.name;
        let category;

        try {
            category = new Category({ name });
            await category.save();
        } catch (err) {
            return res.status(422).json({ message: err.message });
        }

        res.status(201).json(category);
        budgetActions.updateBudgetOnCategoryAddition(name);
    }

    async get(req, res) {
        const categories = await Category.find({});

        res.status(200).json(categories);
    }

    async update(req, res) {
        const name = req.body.name;
        const id = req.params.id;

        const category = await Category.findOne({ _id: id });
        const oldName = category.name;
        category.name = name;
        await category.save();

        res.status(201).json(category);

        budgetActions.updateBudgetOnCategoryUpdate(oldName, name);
        expenseActions.updateExpenseOnCategoryUpdate(oldName, name);
    }

    async delete(req, res) {
        const id = req.params.id;
        const category = await Category.findOne({ _id: id });

        await Category.deleteOne({ _id: id });
        res.sendStatus(204);

        budgetActions.updateBudgetOnCategoryDelete(category.name);
    }
}

module.exports = new CategoryActions();
