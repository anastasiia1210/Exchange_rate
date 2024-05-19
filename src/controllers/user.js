const userService = require('../services/user');
const User = require('../models/user');
const mongoose = require("mongoose");

async function addUser(req, res) {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({ error: 'Email already subscribed' });
        }
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            email: email,
        });
        await newUser.save();
        res.status(201).json({ message: 'User subscribed successfully' });
    } catch (error) {
        console.error('Error subscribing user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


async function getAllUsers(req, res) {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    addUser,
    getAllUsers
};
