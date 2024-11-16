require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const notifyRoute = require('./routes/notify');

const usersDatabaseUrl = process.env.USERS_DATABASE_URL;

mongoose.connect(usersDatabaseUrl);
const users = mongoose.connection;

users.on('error', (error) => {
    console.log("Database connection error" + error)
})

users.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

app.use(cors());
app.use(express.json());

app.use('/notify', notifyRoute);

app.listen(3006, () => {
    console.log(`Server Started at ${3006}`)
})
