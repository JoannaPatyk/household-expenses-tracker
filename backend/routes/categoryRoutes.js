const express = require('express');
const router = express.Router();

const categoryActions = require('../actions/api/v1/categoryActions');
const checkAuth = require('../middleware/check-auth');

router.get('/categories', checkAuth, categoryActions.get);
router.post('/categories', checkAuth, categoryActions.save);
router.patch('/categories/:id', checkAuth, categoryActions.update);
router.delete('/categories/:id', checkAuth, categoryActions.delete);

module.exports = router;
