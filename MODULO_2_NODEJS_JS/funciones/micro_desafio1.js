const calcularMonto = (tipoVehiculo, diasAlquiler, sillaBebe) => {

    let total = 0;
    switch (tipoVehiculo) {
        case 'compacto':
            total = 14000 * diasAlquiler;
            break;
        case 'mediano':
            total = 17000 * diasAlquiler;
            break;
        case 'camioneta':
            total = 28000 * diasAlquiler;
            break;
    
        default:
            console.log("El tipo no es válido");
            return;
    }
    total = sillaBebe ? total + 1200 * diasAlquiler : total;

    console.log("El monto total por dia es: ", total);
}

calcularMonto('mediano', 2, false)