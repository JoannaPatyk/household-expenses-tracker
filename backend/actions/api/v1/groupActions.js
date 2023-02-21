const Group = require('../../../database/models/groupModel');
const User = require('../../../database/models/userModel');
class GroupActions {
    async getGroup(req, res) {
        const groupId = req.userData.groupId;

        try {
            const group = await Group.findOne({ _id: groupId }).populate('members', '_id name email');

            res.status(200).json(group);
        } catch (error) {
            return res.status(422).json({ message: error.message });
        }
    }

    async addMember(req, res) {
        const email = req.body.email;
        const groupId = req.userData.groupId;

        try {
            const user = await User.findOne({ email });
            const userIdToAdd = user._id;
            const group = await Group.findOne({ _id: groupId });

            group.members.push(userIdToAdd);
            await group.save();

            res.status(201).json(group);
        } catch (error) {
            return res.status(422).json({ message: error.message });
        }
    }

    async deleteMember(req, res) {
        const email = req.body.email;
        const groupId = req.userData.groupId;

        try {
            const user = await User.findOne({ email: email });
            const userIdToRemove = user._id;

            const group = await Group.findOne({ _id: groupId });
            group.members = group.members.filter((item) => !item._id.equals(userIdToRemove));
            await group.save();

            res.status(204).json();
        } catch (error) {
            return res.status(422).json({ message: error.message });
        }
    }

    async updateGroupName(req, res) {
        const newName = req.body.newName;
        const groupId = req.userData.groupId;

        try {
            const group = await Group.findOne({ _id: groupId });
            group.groupName = newName;

            await group.save();

            res.status(200).json(group);
        } catch (error) {
            return res.status(422).json({ message: error.message });
        }
    }

    createNewGroup = async (email) => {
        const groupName = 'Twoja grupa';

        const user = await User.findOne({ email });
        const group = new Group({ groupName, members: [user._id] });
        await group.save();
    };
}

module.exports = new GroupActions();
