const express = require('express');
const router = express.Router();

const groupActions = require('../actions/api/v1/groupActions');
const checkAuth = require('../middleware/check-auth');

router.get('/group', checkAuth, groupActions.getGroup);
router.post('/group/add_member', checkAuth, groupActions.addMember);
router.post('/group/delete_member', checkAuth, groupActions.deleteMember);
router.patch('/group', checkAuth, groupActions.updateGroupName);

module.exports = router;
