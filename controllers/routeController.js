const axios = require('axios')

exports.homePage = async (req, res) => {
    try {
        await axios
            .get('http://localhost:8002/api/receipts')
            .then((response) => {
                // console.log(response.data.data)
                res.status(200).render('index', {
                    receipts: response.data.data,
                    title: 'Home',
                })
            })
    } catch (err) {
        res.status(500).send('<h1>Error 500</h1>')
    }
}

exports.oneProduct = async (req, res) => {
    try {
        await axios
            .get(`http://localhost:8002/api/receipts/${req.params.id}`)
            .then((response) => {
                res.status(200).render('product', {
                    receipt: response.data.data,
                    title: 'Product',
                })
            })
    } catch (err) {
        res.status(500).send('<h1>Error 500</h1>')
    }
}

exports.addProduct = async (req, res) => {
    try {
        res.status(200).render('add', { title: 'add-receipt' })
    } catch (err) {
        res.status(500).send('<h1>Error 500</h1>')
    }

}
