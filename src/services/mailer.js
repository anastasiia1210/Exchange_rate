require('dotenv').config();
const nodemailer = require("nodemailer");
const cron = require('node-cron');
const userService = require('../services/user');
const { getExchangeRates } = require('../services/exchangeRate');


const configEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
       user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

cron.schedule('0 10 * * *', async () => {
    console.log('Send mail 10:00');
    try {
        const exchangeRate = await getExchangeRates();
        const mailText = `Current exchange rate: ${exchangeRate}`;
        const mail = {
            from: '000anastasiia@gmail.com',
            subject: 'Exchange Rate Update',
            text: mailText
        };
        const users = await userService.getAllUsers();
        const emails = users.map(user => user.email);
        mail.to = emails.join(', ');
        configEmail.sendMail(mail, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
    } catch (error) {
        console.error('Error sending email:', error);
    }
});
