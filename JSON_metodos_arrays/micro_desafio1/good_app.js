// Punto 1 pedir los datos previamente creados y guardados
let datosBici = require("./datosBici");

let dhBici = {
    bicicletas: datosBici,

    // Punto 2.a. Buscar una bici por id y nos regresa la bici encontrada, sino la encuentra regresa un valor null
    buscarBici: function (idABuscar) {
    return dhBici.bicicletas.filter(bicicleta => bicicleta.id === idABuscar)
    },

    // Punto 2.b recibe un id y debemos de asignar el estado de vendida, si no la encuentra retornar un mensaje.
    venderBici: function (idABuscar) {
    if (this.buscarBici(idABuscar).length > 0) {
        dhBici.bicicletas[idABuscar - 1].vendida = true;
        return dhBici.bicicletas.filter(valor => valor.id == idABuscar);
    } else
        return 'Bicicleta no encontrada'
    },

    // Punto 2.c Regresa un listado de la bicicletas las cuales no estan vendidas
    biciParaLaVenta: function(){
    return dhBici.bicicletas.filter(valor => valor.vendida == false)
    },

    // Punto 2.d Regresa la suma total de todas las bicicletas vendidas
    totalDeVentas: function(){
    return dhBici.bicicletas.reduce((acum, valor) => {
        if(valor.vendida)
            acum = acum + valor.precio
        return acum
    }, 0)
    },

    //-----------------Micro desafio extra --------------------------------------
    // Punto 1 Recibe un porcentaje para el aumento del precio de las bicicletas y regresa el objeto actualizado con los nuevos precios
    aumentoBici: function(percent){
    return dhBici.bicicletas.map(valor => {
        valor.precio = valor.precio + valor.precio * (percent / 100)
        return valor
    });
    },

    // Punto 2 Recibe un numero de rodado y regresa un listado de las bicicletas con ese numero de rodado
    biciPorRodado: function(numeroRodado){
    return dhBici.bicicletas.filter(valor => valor.rodado == numeroRodado)
    },

    // Punto 3 Listado de las bicicletas usando el for .. of()
    listarTodasLasBici: function(){
    console.log('El listado de las bicicletas son:');
    for(let valor of dhBici.bicicletas){
        console.log(valor);
    }
}
}

// Punto 2.a. Buscar una bici por id y nos regresa la bici encontrada, sino la encuentra regresa un valor null
let idecito = 2
console.log(`La bicicleta identificada con el id: ${idecito} es: \n`,dhBici.buscarBici(idecito));

// Punto 2.b recibe un id y debemos de asignar el estado de vendida, si no la encuentra retornar un mensaje.
let idecito2 = 5;
console.log(`Los datos de la bicicleta venida está identificada con el id: ${idecito2} son: \n `,dhBici.venderBici(idecito2));

// Punto 2.c Regresa un listado de la bicicletas las cuales no estan vendidas
console.log('El listado de bicicletas disponibles se muestra a continuacion: \n',dhBici.biciParaLaVenta());

// Punto 2.d Regresa la suma total de todas las bicicletas vendidas
console.log('El total de las ventas de las bicicletas vendidas es: \n',dhBici.totalDeVentas());

//-----------------Micro desafio extra --------------------------------------
// Punto 1 Recibe un porcentaje para el aumento del precio de las bicicletas y regresa el objeto actualizado con los nuevos precios
let percent = 20;
console.log(`El listado de las bicicletas con un aumento de ${percent} es: \n`,dhBici.aumentoBici(percent))

// Punto 2 Recibe un numero de rodado y regresa un listado de las bicicletas con ese numero de rodado
let rodado = 26; // 16, 29, 26
console.log(`Listado de las bicicletas con un rodado de ${rodado}: \n`,dhBici.biciPorRodado(rodado))

// Punto 3 Listado de las bicicletas usando el for .. of()
dhBici.listarTodasLasBici();
