const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const tables = require('./routes/tables')
app.use('/tables', tables) // GET
app.post('/post-test', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});
// app.use('/book', tables) // POST
// app.use('/release', tables) // POST

module.exports = app