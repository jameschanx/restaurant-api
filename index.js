const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const api = require('./routes/api')

app.use('/api/v1', api) // GET


module.exports = app