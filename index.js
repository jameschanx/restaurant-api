const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const api = require('./routes/api')

app.use('/api/v1', api) // GET


module.exports = app