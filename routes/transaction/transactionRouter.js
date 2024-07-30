const { addTransaction, getTransaction, deleteTransaction } = require('./controller/transactionController');

const router = require('express').Router();

router
    .post('/add-income', addTransaction)
    .get('/get-incomes', getTransaction)
    .delete('/delete-income/:id', deleteTransaction)
    

    module.exports = router