
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: String,
    date: Date,
    amount: Number
});

module.exports = mongoose.model('Event', eventSchema);
