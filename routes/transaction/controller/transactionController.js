const Transaction = require('../model/Transaction')

const addTransaction = async (req, res) => {
    const {
        title,
        amount,
        category
    } = req.body
     
    if(!title || !category  || !amount ){
        return res.status(400).json({message: 'info required'})
    }
//in js use typeof amount to check amount.
    if (typeof amount !== 'number' || amount <= 0){
        return res.status(400).json({message: 'Amount must be a positive number!'})
    }
    //handle expense
    // if(!['income', 'expense'].includes(type)){
    //     return res.status(400).json({message: 'Type must be either income or expense.'})
    // }

    const income = new Transaction({
        title,
        amount,
        category,
        // type
    })
    
   try {
    await income.save()
    res.status(200).json({message: 'Expense Added.'})
   }catch (error){
    res.status(500).json({message: 'Server Error!!'})
   }

}

const getTransaction = async (req, res) => {
    try {
        const incomes = await Transaction.find().sort({createdAt: -1})
        res.json(incomes)
    }catch (error) {
        res.status(500).json({message: 'Server error.'})
    }
}
//try catch
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