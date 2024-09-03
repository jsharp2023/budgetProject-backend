const express = require('express')
const cors = require('cors')
const calendarEventRoutes = require('./routes/calendarEventRoutes')
const transactionEventRoutes = require('./routes/transactionEventRoutes')
const userRouter = require('./routes/Users/model/userRouter')
const app = express()

const transactionRouter = require('./routes/transaction/transactionRouter')

//middleware
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3001'//change back to 3001 if it crashes
    
}))
app.use('/api/transaction',transactionRouter)
// app.use(morgan('dev'))
app.use('/api/calendarEventRouter', calendarEventRoutes);
app.use('/api/transaction-events', transactionEventRoutes);
app.use('/api/user', userRouter)



console.log('Server is running');
module.exports = app