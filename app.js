//MODULE REQUIRED
const express = require('express')
const morgan = require('morgan')
const route = require('./routes/route')

// CODE

const app = express()

app.use(express.json())
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(morgan('dev'))

app.use('/', route)
//exportation de APP
module.exports = app
