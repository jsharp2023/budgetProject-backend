// const morgan = require('morgan')
const express = require('express')
const cors = require('cors')
const calendarEventRoutes = require('./routes/calendarEventRoutes')

const app = express()

const transactionRouter = require('./routes/transaction/transactionRouter')

//middleware
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3001'
}))
app.use('/api/transaction',transactionRouter)
// app.use(morgan('dev'))
app.use('/api/calendar-events', calendarEventRoutes);





module.exports = app