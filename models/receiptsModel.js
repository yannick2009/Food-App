const mongoose = require('mongoose')

const receiptsSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: [true, `besoin d'un nom SVP !`],
    },
    details: {
        type: String,
        required: [true, `besoin de details SVP !`],
    },
    carotte: {
        type: Number,
        required: [true, `besoin d'une quantité de carotte SVP !`],
    },
    oignon: {
        type: Number,
        required: [true, `besoin d'une quantité d'oignon SVP !`],
    },
    viande: {
        type: Number,
        required: [true, `besoin d'une quantité de viande SVP !`],
    },
})

const receipts = mongoose.model('receipts', receiptsSchema)

module.exports = receipts
