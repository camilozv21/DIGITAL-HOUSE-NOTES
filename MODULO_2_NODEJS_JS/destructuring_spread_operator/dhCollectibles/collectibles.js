const fs = require('fs');

function importar(nombre){
    let archivo = fs.readFileSync(nombre,'utf-8');
    archivo = JSON.parse(archivo);
    return archivo
}

module.exports = importar;