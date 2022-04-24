const express = require('express')

const route = express.Router()
const routeController = require('../controllers/routeController')
const receiptsController = require('../controllers/receiptsController')

// routes

route.get('/', routeController.homePage)
route.get('/receipt/:id', routeController.oneProduct)
route.get('/add-receipt', routeController.addProduct)

// API routes

route.get('/api/receipts/:id', receiptsController.oneReceipt)
route.get('/api/receipts', receiptsController.allReceipts)
route.post('/api/receipts', receiptsController.addReceipt)
route.delete('/api/receipts/:id', receiptsController.deleteReceipt)

//route.get('/api/receipts', receiptsController.allReceipts)

module.exports = route
