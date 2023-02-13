const express = require('express');
const router = express.Router();

const budgetActions = require('../actions/api/v1/budgetActions');
const checkAuth = require('../middleware/check-auth');

router.get('/budget', checkAuth, budgetActions.get);
router.patch('/budget/:id', checkAuth, budgetActions.patch);

module.exports = router;
