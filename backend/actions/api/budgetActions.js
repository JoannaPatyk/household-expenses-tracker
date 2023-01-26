const Budget = require('../../database/models/budgetModel');

class BudgetActions {
    async get(req, res) {
        const budget = await Budget.find({});

        res.status(200).json(budget);
    }

    async update(req, res) {
        const amount = req.body.amount;
        const id = req.params.id;

        const entry = await Budget.findOne({ _id: id });
        entry.amount = amount;
        await entry.save();

        res.status(201).json(entry);
    }
}

module.exports = new BudgetActions();
