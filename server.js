// require express
const express = require('express')

// instance of express methods
const app = express()

//dotenv
require('dotenv').config()

// require connection DB
const connectDB = require('./config/connectDB')
connectDB()

// Middleware bodyparser 
app.use(express.json())

// Routes
app.use('/api/contacts', require('./routes/contact'))

// PORT
const PORT = process.env.PORT

// create server
app.listen(PORT, error => error ? console.error(error)
    : console.log(`Server is running on ${PORT} ...`)
) 