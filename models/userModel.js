const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: String || Number
    },
    userEmail: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('user', userSchema)
