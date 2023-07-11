const path = require('path')

const controllers = {
    getCart: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/products/cart.html'))
    }
}

module.exports = controllers;