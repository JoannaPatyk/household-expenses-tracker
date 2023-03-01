const express = require('express');
const router = express.Router();

const expenseActions = require('../actions/api/v1/expenseActions');
const checkAuth = require('../middleware/check-auth');

router.get('/expenses', checkAuth, expenseActions.getExpenses);
router.post('/expenses', checkAuth, expenseActions.addExpense);
router.patch('/expenses/:id', checkAuth, expenseActions.updateExpense);
router.delete('/expenses/:id', checkAuth, expenseActions.deleteExpense);

module.exports = router;
