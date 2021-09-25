const express = require('express')
const router = express.Router()

const tablesService = require('../services/tables.service')

router.get('/', tablesService.getTables)

module.exports = router