
const express = require('express')
const cors = require('cors')


const app = express()

const transactionRouter = require('./routes/transaction/transactionRouter')

//middleware
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3001'
}))
app.use('/api/transaction',transactionRouter)





module.exports = app