require('dotenv').config();
const express = require('express');
const connectToMongo = require('./src/db/db');
const userRoutes = require('./src/routes/routes');
require('./src/services/mailer');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

async function startServer() {
    try {
        const db = await connectToMongo();
        app.locals.db = db;

        app.use('/', userRoutes);

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
}

startServer();

process.on('SIGINT', async () => {
    try {
        await client.close();
        console.log('MongoDB connection closed');
        process.exit(0);
    } catch (error) {
        console.error('Error closing MongoDB connection:', error);
        process.exit(1);
    }
});
