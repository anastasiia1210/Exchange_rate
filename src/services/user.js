const { connectToDatabase } = require('../db/db.js');
const User = require('../models/user');
const { v4: uuidv4 } = require('uuid');

async function getAllUsers() {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    getAllUsers
};
