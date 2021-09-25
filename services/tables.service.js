const express = require('express')

const tables = {
    '1': { occupied: true},
    '2': { occupied: true},
    '3': { occupied: true},
    '4': { occupied: true},
    '5': { occupied: true}
}

module.exports = {
    getTables: (req, res) => {
        return res.status(200).json({ tables: tables })
    }
}