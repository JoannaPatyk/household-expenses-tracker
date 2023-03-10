require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const groupActions = require('./groupActions');

const User = require('../../../database/models/userModel');
const Group = require('../../../database/models/groupModel');
class UserActions {
    signUp = async (req, res) => {
        try {
            const name = req.body.name;
            const email = req.body.email;
            const password = req.body.password;

            const user = await User.findOne({ email });

            if (user) {
                return res.status(409).json();
            } else {
                bcrypt.hash(password, 12, async (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            name: name,
                            email: email,
                            password: hash
                        });

                        await user.save();

                        if (!(await groupActions.createNewGroup(email))) {
                            await user.remove();
                            return res.status(422).json({
                                message: 'Group creation failed'
                            });
                        }

                        res.status(201).json();
                    }
                });
            }
        } catch (err) {
            res.status(422).json({ message: err.message });
        }
    };

    login = async (req, res) => {
        try {
            const email = req.body.email;
            const password = req.body.password;

            const user = await User.findOne({ email });

            if (user === null) {
                return res.status(401).json();
            }

            bcrypt.compare(password, user.password, async (err, result) => {
                if (err || !result) {
                    return res.status(401).json();
                }

                if (result) {
                    const group = await Group.findOne({ isActive: true, members: user._id });
                    if (!group) {
                        return res.status(401).json();
                    }

                    const token = jwt.sign(
                        {
                            email: user.email,
                            userId: user._id,
                            groupId: group._id
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: '1h'
                        }
                    );
                    return res.status(200).json({
                        token: token
                    });
                }
            });
        } catch (err) {
            res.status(500).json({
                error: err
            });
        }
    };

    getUser = async (req, res) => {
        try {
            const userId = req.userData.userId;
            const user = await User.findOne({ _id: userId });

            const name = user.name;
            const email = user.email;

            res.status(200).json({ name, email });
        } catch (error) {
            return res.status(422).json({ message: error.message });
        }
    };

    deleteUser = async (req, res) => {
        try {
            const id = req.params.id;
            await User.deleteOne({ _id: id });

            res.status(200).json();
        } catch (error) {
            return res.status(422).json({ message: error.message });
        }
    };
}

module.exports = new UserActions();
