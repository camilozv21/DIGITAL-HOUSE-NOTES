const fs = require("fs");

let contenido = fs.readFileSync("bicicletas.json", "utf8");
let arrayBicis = JSON.parse(contenido);

//console.log(arrayBicis)
module.exports = arrayBicis;
//bicicletas.json y datosBici son el micro desafio 1