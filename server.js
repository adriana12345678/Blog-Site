const express = require('express')
const mongoose = require('mongoose')
const bobyParser = require('body-parser')
const users = require('./routes/api/users')

const app = express()

// body parser middlerware

app.use(bobyParser.urlencoded({extended: false}))
app.use(bobyParser.json())

// db connection
const db = require('./config/keys').mongoURI
mongoose.connect(db,{ useNewUrlParser: true })
      .then(()=> console.log('Database connected Successfully'))
      .catch(err => console.log(err))

// routes
app.use('/api/users',users)

const PORT = process.env.PORT || 5000


app.listen(PORT,()=> console.log(`Server running on Port No ${PORT}`))