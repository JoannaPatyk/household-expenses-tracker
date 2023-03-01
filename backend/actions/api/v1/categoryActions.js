const Category = require('../../../database/models/categoryModel');
const budgetActions = require('./budgetActions');
const expenseActions = require('./expenseActions');

class CategoryActions {
    getCategories = async (req, res) => {
        try {
            const groupId = req.userData.groupId;
            const categories = await Category.find({ groupId: groupId });

            res.status(200).json(categories);
        } catch (error) {
            res.status(422).json({ message: error.message });
        }
    };

    saveCategory = async (req, res) => {
        try {
            const groupId = req.userData.groupId;
            const name = req.body.name;
            const category = await Category.findOne({ name: name });

            if (category) {
                return res.status(409).json({ message: 'Category already exists' });
            }

            const newCategory = new Category({ name: name, groupId: groupId });
            await newCategory.save();

            await budgetActions.updateBudgetOnCategoryAddition(name, groupId);

            res.status(201).json(newCategory);
        } catch (error) {
            return res.status(422).json({ message: error.message });
        }
    };

    updateCategoryName = async (req, res) => {
        try {
            const name = req.body.name;
            const id = req.params.id;
            const groupId = req.userData.groupId;

            const category = await Category.findOne({ _id: id });
            const oldName = category.name;
            category.name = name;
            await category.save();

            await budgetActions.updateBudgetOnCategoryUpdate(oldName, name, groupId);
            await expenseActions.updateExpenseOnCategoryUpdate(oldName, name, groupId);

            res.status(201).json(category);
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    };

    deleteCategory = async (req, res) => {
        try {
            const id = req.params.id;
            const groupId = req.userData.groupId;

            const category = await Category.findOne({ _id: id });
            await Category.deleteOne({ _id: id });

            await budgetActions.updateBudgetOnCategoryDelete(category.name, groupId);

            res.sendStatus(204);
        } catch (error) {
            return res.status(422).json({ message: error.message });
        }
    };
}

module.exports = new CategoryActions();
