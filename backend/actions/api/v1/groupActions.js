const Group = require('../../../database/models/groupModel');
const User = require('../../../database/models/userModel');

class GroupActions {
    getGroup = async (req, res) => {
        try {
            const groupId = req.userData.groupId;
            const group = await Group.findOne({ _id: groupId })
                .populate('owner', 'name email')
                .populate('members', 'name email')
                .populate('invitations', 'name email');

            res.status(200).json(group);
        } catch (error) {
            res.status(422).json({ message: error.message });
        }
    };

    updateGroupName = async (req, res) => {
        try {
            const newName = req.body.newName;
            const groupId = req.userData.groupId;

            const group = await Group.findOne({ _id: groupId });
            group.name = newName;

            await group.save();

            res.status(200).json();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    };

    getInvitations = async (req, res) => {
        try {
            const userId = req.userData.userId;
            const groups = await Group.find({ invitations: userId })
                .select('name owner')
                .populate('owner', 'name email');

            res.status(200).json(groups);
        } catch (error) {
            res.status(422).json({ message: error.message });
        }
    };

    inviteUser = async (req, res) => {
        try {
            const email = req.body.email;
            const groupId = req.userData.groupId;

            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const userIdToAdd = user._id;

            const group = await Group.findOne({ _id: groupId });

            if (group.invitations.find((item) => item.equals(userIdToAdd))) {
                return res.status(422).json({ message: 'User already invited' });
            }

            group.invitations.push(userIdToAdd);
            await group.save();

            res.status(201).json();
        } catch (error) {
            res.status(422).json({ message: error.message });
        }
    };

    declineUserInvitation = async (req, res) => {
        try {
            const email = req.body.email;
            const groupId = req.userData.groupId;

            if (!(await this.removeInvitation(email, groupId, res))) {
                return res;
            }

            res.status(204).json();
        } catch (error) {
            res.status(422).json({ message: error.message });
        }
    };

    removeUser = async (req, res) => {
        try {
            const email = req.body.email;
            const groupId = req.userData.groupId;

            const user = await User.findOne({ email: email });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const userIdToRemove = user._id;

            const group = await Group.findOne({ _id: groupId });
            group.members = group.members.filter((item) => !item._id.equals(userIdToRemove));
            await group.save();

            const primaryGroup = await Group.findOne({ owner: userIdToRemove });
            primaryGroup.isActive = true;
            await primaryGroup.save();

            res.status(204).json();
        } catch (error) {
            res.status(422).json({ message: error.message });
        }
    };

    acceptInvitation = async (req, res) => {
        try {
            const email = req.userData.email;
            const userId = req.userData.userId;
            const currentGroupId = req.userData.groupId;
            const newGroupId = req.body.groupId;

            const newGroup = await Group.findOne({ _id: newGroupId, invitations: userId });
            if (!newGroup) {
                return res.status(404).json({ message: 'No invitation' });
            }

            const currentGroup = await Group.findOne({ _id: currentGroupId });
            currentGroup.isActive = false;
            await currentGroup.save();

            newGroup.members.push(userId);
            await newGroup.save();

            if (!(await this.removeInvitation(email, newGroupId, res))) {
                return res;
            }

            res.status(201).json();
        } catch (error) {
            res.status(422).json({ message: error.message });
        }
    };

    declineInvitation = async (req, res) => {
        try {
            const email = req.userData.email;
            const groupId = req.body.groupId;

            if (!(await this.removeInvitation(email, groupId, res))) {
                return res;
            }

            res.status(204).json();
        } catch (error) {
            res.status(422).json({ message: error.message });
        }
    };

    leaveGroup = async (req, res) => {
        try {
            const userId = req.userData.userId;
            const groupId = req.userData.groupId;

            const currentGroup = await Group.findOne({ _id: groupId });

            if (currentGroup.owner === userId) {
                return res.status(409).json({ message: "Cannot remove user from it's own group" });
            }

            currentGroup.members = currentGroup.members.filter((item) => !item._id.equals(userId));
            await currentGroup.save();

            const primaryGroup = await Group.findOne({ owner: userId });
            primaryGroup.isActive = true;
            await primaryGroup.save();

            res.status(204).json();
        } catch (error) {
            res.status(422).json({ message: error.message });
        }
    };

    removeInvitation = async (email, groupId, res) => {
        try {
            const user = await User.findOne({ email: email });

            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return false;
            }
            const userIdToRemove = user._id;

            const group = await Group.findOne({ _id: groupId });
            group.invitations = group.invitations.filter((item) => !item._id.equals(userIdToRemove));
            await group.save();
        } catch (error) {
            res.status(422).json({ message: error.message });
            return false;
        }

        return true;
    };

    createNewGroup = async (email) => {
        try {
            const user = await User.findOne({ email: email });
            const group = new Group({ name: 'Twoja grupa', owner: user._id, isActive: true, members: [user._id] });
            await group.save();

            return true;
        } catch (error) {
            return false;
        }
    };
}

module.exports = new GroupActions();
