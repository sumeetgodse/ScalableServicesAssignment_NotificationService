const express = require('express');

const router = express.Router();
const nodemailer = require('nodemailer');

const userModel = require('../models/userModel');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NOTIFIER_EMAIL,
        pass: process.env.NOTIFIER_PASSWORD,
    },
});

router.post('/', async (req, res) => {
    const userData = await userModel.findOne({ userId: req.body.userId })
    if (userData) {
        const userEmail = userData.userEmail
        try {
            const mailOptions = {
                from: process.env.NOTIFIER_EMAIL,
                to: userEmail,
                subject: `Scalable Services Order ID : ${req.body.orderId}`,
                text: req.body.message,
            };
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Notification Email SENT!" })
        } catch (err) {
            res.status(400).json({ message: "Notification Email FAILED!", errorMsg: err })
        }
    } else {
        res.status(400).json({ message: "Notification Email FAILED!", errorMsg: 'USER DOES NOT EXIST!' })
    }
})

module.exports = router;
