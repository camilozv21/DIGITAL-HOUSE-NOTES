const express = require('express');
const path = require('path')

const mainRouter = require('./routes/mainroutes.js')
const productRouter = require('./routes/productRoute.js')

const app = express();

app.use(express.static('public'));
// app.use(express.static(path.join(__dirname,'public')));

app.use(mainRouter)
app.use('/products', productRouter) // Prefijo products

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000🚀');
})