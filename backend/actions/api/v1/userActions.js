require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../../../database/models/userModel');

class UserActions {
    async signUp(req, res) {
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
                    try {
                        const user = new User({
                            email: email,
                            password: hash
                        });

                        await user.save();
                        res.status(201).json();
                    } catch (err) {
                        return res.status(422).json({ message: err.message });
                    }
                }
            });
        }
    }

    async login(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        try {
            const user = await User.findOne({ email });

            if (user === null) {
                return res.status(401).json();
            }

            bcrypt.compare(password, user.password, (err, result) => {
                if (err || !result) {
                    return res.status(401).json();
                }

                if (result) {
                    const token = jwt.sign(
                        {
                            email: user.email,
                            id: user._id
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
    }

    async delete(req, res) {
        const id = req.params.id;
        await User.deleteOne({ _id: id });

        res.status(200).json();
    }
}

module.exports = new UserActions();
