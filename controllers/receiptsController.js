// REQUIRED
const Receipts = require('../models/receiptsModel')

// API CONTROLLERS
exports.allReceipts = async (req, res, next) => {
    try {
        if (req.query.id) {
            const one = await Receipts.findById(req.query.id)
            console.log(one)
            res.status(200).json({
                status: 'success',
                data: one,
            })
        } else {
            const receipts = await Receipts.find()
            res.status(200).json({
                status: 'success',
                data: receipts,
            })
        }
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            message: err.message,
        })
    }
    next()
}

exports.oneReceipt = async (req, res, next) => {
    try {
        const one = await Receipts.findById(req.params.id)
        // console.log(one)
        res.status(200).json({
            status: 'success',
            data: one,
        })
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            message: err.message,
        })
    }
    next()
}

exports.addReceipt = async (req, res, next) => {
    try {
        const data = await Receipts.create({
            nom: req.body.nom,
            details: req.body.details,
            carotte: req.body.carotte,
            oignon: req.body.oignon,
            viande: req.body.viande,
        })
        res.status(200).render('add', { title: 'add-receipt' })

        // res.status(200).json({
        //     status: 'success',
        //     data: data,
        // })
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            message: err.message,
        })
    }
    next()
}

exports.deleteReceipt = async (req, res, next) => {
    try {
        await Receipts.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success',
            message: 'delete succesfully',
        })
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            message: err.message,
        })
    }

    next()
}
