const express = require('express');
const router = express.Router();

const budgetActions = require('../actions/api/v1/budgetActions');

router.get('/budget', budgetActions.get);
router.patch('/budget/:id', budgetActions.update);

module.exports = router;
