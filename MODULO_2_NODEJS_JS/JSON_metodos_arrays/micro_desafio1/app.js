// Punto 1 pedir los datos previamente creados y guardados
let datosBici = require("./datosBici");

let dhBici = {
    bicicletas: datosBici,
}

// Punto 2.a. Buscar una bici por id y nos regresa la bici encontrada, sino la encuentra regresa un valor null
dhBici.buscarBici = function (idABuscar) {
    return dhBici.bicicletas.filter(function (bicicleta) {
        return bicicleta.id === idABuscar
    })
}

let idecito = 2
console.log(`La bicicleta identificada con el id: ${idecito} es: \n`,dhBici.buscarBici(idecito));

// Punto 2.b recibe un id y debemos de asignar el estado de vendida, si no la encuentra retornar un mensaje.
dhBici.venderBici = function (idABuscar) {
    if (dhBici.buscarBici(idABuscar).length > 0) {
        dhBici.bicicletas[idABuscar - 1].vendida = true;
        return dhBici.bicicletas.filter(valor => valor.id == idABuscar);
    } else
        return 'Bicicleta no encontrada'
}

let idecito2 = 5;
console.log(`Los datos de la bicicleta venida está identificada con el id: ${idecito2} son: \n `,dhBici.venderBici(idecito2));

// Punto 2.c Regresa un listado de la bicicletas las cuales no estan vendidas
dhBici.biciParaLaVenta = function(){
    return dhBici.bicicletas.filter(valor => valor.vendida == false)
}

console.log('El listado de bicicletas disponibles se muestra a continuacion: \n',dhBici.biciParaLaVenta());

// Punto 2.d Regresa la suma total de todas las bicicletas vendidas
dhBici.totalDeVentas = function(){
    return dhBici.bicicletas.reduce((acum, valor) => {
        if(valor.vendida)
            acum = acum + valor.precio
        return acum
    }, 0)
}

console.log('El total de las ventas de las bicicletas vendidas es: \n',dhBici.totalDeVentas());

//-----------------Micro desafio extra --------------------------------------
// Punto 1 Recibe un porcentaje para el aumento del precio de las bicicletas y regresa el objeto actualizado con los nuevos precios
dhBici.aumentoBici = function(percent){
    return dhBici.bicicletas.map(valor => {
        valor.precio = valor.precio + valor.precio * (percent / 100)
        return valor
    });
}

let percent = 20;
console.log(`El listado de las bicicletas con un aumento de ${percent} es: \n`,dhBici.aumentoBici(percent))

// Punto 2 Recibe un numero de rodado y regresa un listado de las bicicletas con ese numero de rodado
dhBici.biciPorRodado = function(numeroRodado){
    return dhBici.bicicletas.filter(valor => valor.rodado == numeroRodado)
}

let rodado = 26; // 16, 29, 26
console.log(`Listado de las bicicletas con un rodado de ${rodado}: \n`,dhBici.biciPorRodado(rodado))

// Punto 3 Listado de las bicicletas usando el for .. of()
dhBici.listarTodasLasBici = function(){
    console.log('El listado de las bicicletas son:');
    for(let valor of dhBici.bicicletas){
        console.log(valor);
    }
}

dhBici.listarTodasLasBici();