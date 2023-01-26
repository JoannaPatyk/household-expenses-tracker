const Category = require('../../database/models/categoryModel');

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
    }

    async get(req, res) {
        const categories = await Category.find({});

        res.status(200).json(categories);
    }

    async update(req, res) {
        const name = req.body.name;
        const id = req.params.id;

        const category = await Category.findOne({ _id: id });
        category.name = name;
        await category.save();

        res.status(201).json(category);
    }

    async delete(req, res) {
        const id = req.params.id;

        await Category.deleteOne({ _id: id });

        res.sendStatus(204);
    }
}

module.exports = new CategoryActions();
