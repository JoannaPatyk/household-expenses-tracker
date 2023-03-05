const express = require('express');
const router = express.Router();

const userActions = require('../actions/api/v1/userActions');
const checkAuth = require('../middleware/check-auth');

router.post('/user/sign_up', userActions.signUp);
router.post('/user/login', userActions.login);
router.get('/user', checkAuth, userActions.getUser);
router.delete('/user/:id', checkAuth, userActions.deleteUser);

module.exports = router;
