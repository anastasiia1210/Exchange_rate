const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");

const userSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
});


const User = model('User', userSchema);
module.exports = User;
