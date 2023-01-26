const express = require('express');
const router = express.Router();

const categoryActions = require('../actions/api/categoryActions');

router.get('/categories', categoryActions.get);
router.post('/categories', categoryActions.save);
router.patch('/categories/:id', categoryActions.update);
router.delete('/categories/:id', categoryActions.delete);

module.exports = router;
