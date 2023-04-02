function totalPagarCliente(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let total;
    switch (tipoHamburguesa) {
        case 'carne':
            total = 1800
            break;
        case 'pollo':
            total = 1500
            break;
        case 'vegetariana':
            total = 1200
            break;
    
        default:
            console.log("Tipo de hamburguesa no disponible aún :3");
            break;
    }
    total = jamon ? total + 30 : total
    total = queso ? total + 25 : total
    total = salsaTomate ? total + 5 : total
    total = mayonesa ? total + 5 : total
    total = mostaza ? total + 5 : total
    total = tomate ? total + 15 : total
    total = lechuga ? total + 10 : total
    total = cebolla ? total + 10 : total

    return total
};

const imprimirMensaje = (nombre, apellido, tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla, callback) => {
    console.log('Estimado ',nombre, ' ', apellido,' el monto total a pagar es de: ', callback(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa,mostaza,tomate,lechuga,cebolla));
}

imprimirMensaje('Juan', 'Zapata', 'carne', true, true, true, false, false,  true, true, true, totalPagarCliente)