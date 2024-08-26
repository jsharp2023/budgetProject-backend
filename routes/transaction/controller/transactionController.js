// const User = require('../../Users/model/User')
const Transaction = require('../model/Transaction')

//function to add new transactions
const addTransaction = async (req, res) => {
    const {
        title,
        amount,
        category
    } = req.body
     //validates request from neg and pos num
    if(!title || !category  || amount == null ){
        return res.status(400).json({message: 'info required'})
    }
//in js use typeof amount to check amount.
    if (typeof amount !== 'number'){
        return res.status(400).json({message: 'Amount must be a  number!'})
    }
   
    // const userId = res.locals.decodedToken?.id;
    // if (!userId){
    //     return res.status(400).json({message: "User ID is Required"})
    // }
// creates the new instance
    const income = new Transaction({
        title,
        amount,
        category,
        // userId:res.locals.decodedToken.id
    })
    //here we are saving
   try {

    const savedIncome = await income.save()
    res.status(200).json({message: 'Expense Added.', payload:savedIncome})
   }catch (error){
    console.error('Error saving transaction:', error);
    res.status(500).json({message: 'Server Error!!', error: error.message})
   }

}
//get the amount
const getTransaction = async (req, res) => {
    try {
        const incomes = await Transaction.find().sort({createdAt: -1})
        res.json(incomes)
    }catch (error) {
        res.status(500).json({message: 'Server error.'})
    }
}
//deletes the amount
const deleteTransaction = async (req, res) => {
    const {id} = req.params;
    try {
        await Transaction.findByIdAndDelete(id)
        res.status(200).json({message:"Income Deleted!"})
    } catch (error) {
        res.status(500).json({message: 'Server error.'}) 
    }
}

module.exports = {deleteTransaction, addTransaction, getTransaction}