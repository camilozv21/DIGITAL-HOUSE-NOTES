let doble = numero => 2 * numero;
let triple = numero => 3 * numero;

let aplicarCallback = (numero, callback) => callback(numero)

console.log(aplicarCallback(3,doble))