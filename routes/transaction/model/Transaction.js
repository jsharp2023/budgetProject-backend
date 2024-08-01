const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
        
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    type: {
        type: String,
        //note:enum: specifies value in the array'income or expense'
        enum: ['income', 'expense'],
        required: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },


}, {timestamps: true})

module.exports = mongoose.model('transaction', TransactionSchema)