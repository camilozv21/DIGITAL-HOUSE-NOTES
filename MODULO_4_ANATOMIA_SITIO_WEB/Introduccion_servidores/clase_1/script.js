const express = require('express');
const path = require('path');
const app = express()

app.listen(3000, () => console.log('Servidor corriendo'));

/*¿Qué deberás hacer?. Tendrás que levantar un servidor en el puerto 3000 y responder a dos rutas get. La ruta root (/), debe responder enviando la vista en el directorio /views/home.html; y la ruta 404 (/404), debe enviar "Error página no encontrada". Para esto deberás hacer uso de la librería path y de la función sendfile entre otras cosas ya vistas.*/

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
});

app.get('/404', (req, res) => {
    res.send("Error página no encontrada")
});

// app.get('/', (req, res) => res.send('Bienvenido a mi servidor'))

// app.get('/contacto', (req, res) => {
//     let mensajeContacto = 'Hey papi la buena, dejanos tu número'
//     res.send(mensajeContacto)
// })

// app.get('/un-array', (req, res) => {
//     let unArray = ['Hoy soy un array', 1, 54, 69];
//     res.send(unArray);
// })

// let producto = {
//     tipoProducto: null,
//     precio: null,
//     cantidad: null
// };

// app.get('/producto/agregar', (req, res) => res.send(producto));

// app.get('/about-us', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './views/index.html'))
// })