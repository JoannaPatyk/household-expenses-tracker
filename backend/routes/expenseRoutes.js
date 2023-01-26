const express = require('express');
const router = express.Router();

const expenseActions = require('../actions/api/expenseActions');

router.get('/expenses', expenseActions.get);
router.post('/expenses', expenseActions.save);
router.patch('/expenses/:id', expenseActions.update);
router.delete('/expenses/:id', expenseActions.delete);

module.exports = router;
