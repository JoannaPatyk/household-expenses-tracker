const express = require('express');
const router = express.Router();

const groupActions = require('../actions/api/v1/groupActions');
const checkAuth = require('../middleware/check-auth');

router.get('/group', checkAuth, groupActions.getGroup);
router.patch('/group', checkAuth, groupActions.updateGroupName);
router.get('/group/invitations', checkAuth, groupActions.getInvitations);
router.post('/group/invite_user', checkAuth, groupActions.inviteUser);
router.post('/group/decline_user_invitation', checkAuth, groupActions.declineUserInvitation);
router.post('/group/remove_user', checkAuth, groupActions.removeUser);
router.post('/group/accept_invitation', checkAuth, groupActions.acceptInvitation);
router.post('/group/decline_invitation', checkAuth, groupActions.declineInvitation);
router.post('/group/leave_group', checkAuth, groupActions.leaveGroup);

module.exports = router;
