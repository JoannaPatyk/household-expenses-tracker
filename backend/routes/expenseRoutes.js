const express = require('express');
const router = express.Router();

const expenseActions = require('../actions/api/v1/expenseActions');
const checkAuth = require('../middleware/check-auth');

router.get('/expenses', checkAuth, expenseActions.get);
router.post('/expenses', checkAuth, expenseActions.save);
router.patch('/expenses/:id', checkAuth, expenseActions.update);
router.delete('/expenses/:id', checkAuth, expenseActions.delete);

module.exports = router;
