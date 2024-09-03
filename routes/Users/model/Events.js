const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    amount: { type: Number, required: true }
});

module.exports = mongoose.model('Event', eventSchema);

