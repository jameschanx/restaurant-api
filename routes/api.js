const express = require('express')
const router = express.Router()

const tablesService = require('../services/tables.service')

router.get('/tables', tablesService.getTables)
router.post('/book', tablesService.bookTable)

module.exports = router