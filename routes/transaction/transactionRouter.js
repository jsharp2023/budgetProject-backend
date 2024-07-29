const { addExpense, getExpense, deleteExpense } = require('./controller/transactionController');
const { addIncome, getIncomes, deleteIncome } = require('../../controller/income');

const router = require('express').Router();

router
    .post('/add-expense', addExpense)
    .post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', getExpense)
    .get('/get-expense', getExpense)
    .delete('/delete-expense/:id', deleteExpense)

    module.exports = router