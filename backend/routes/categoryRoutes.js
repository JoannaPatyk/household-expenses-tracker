const express = require('express');
const router = express.Router();

const categoryActions = require('../actions/api/v1/categoryActions');
const checkAuth = require('../middleware/check-auth');

router.get('/categories', checkAuth, categoryActions.getCategories);
router.post('/categories', checkAuth, categoryActions.saveCategory);
router.patch('/categories/:id', checkAuth, categoryActions.updateCategoryName);
router.delete('/categories/:id', checkAuth, categoryActions.deleteCategory);

module.exports = router;
