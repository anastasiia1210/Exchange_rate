require('dotenv').config();
const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');

const uri = process.env.DATABASE_URL;

async function connectToMongo() {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

module.exports = connectToMongo;

