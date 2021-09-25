const express = require('express')

// our temporary DB =======================================
const tables = {
    '1': { size: 10, occupied: false},
    '2': { size: 4, occupied: false},
    '3': { size: 2, occupied: false},
    '4': { size: 6, occupied: false},
    '5': { size: 12, occupied: false}
}
// ========================================================

module.exports = {
    getTables: (req, res) => {
        return res.status(200).json(tables)
    },
    bookTable: (req, res) => {
        const tableNumber = req.body.tableNumber
        tables[tableNumber].occupied = true
        res.sendStatus(200);
    }
}

// TODO change getTables logic to say
// table 1 status: available
// table 2 status: available
// table 3 status: unavailable
// table 4 status: available
// table 5 status: available


// TODO implement release table -> set occupied back to false


// TODO implement the following checks:
//  - see if table is already occupied, if so, send Error
//  - see if table number exist.  if table number does not exist, send error.


// TODO implement https://mysuperrestaurant.com/api/v1/tables/{table number}
//  - for example, if i do curl 127.0.0.1:3000/api/v1/tables/1 i should get { size: 10, occupied: false }