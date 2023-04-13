const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.listen(3030, () => console.log('Servidor levantado en el puerto 3030 🚀')); //Windows punto 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
});

app.get('/clase', (req, res) => {
    res.sendFile(path.join(__dirname, './views/clase2.html'))
});
