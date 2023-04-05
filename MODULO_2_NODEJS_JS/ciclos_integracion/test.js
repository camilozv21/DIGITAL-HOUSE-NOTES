function reporteDePasajeros(estaciones){
    let cantidadPasajeros = 200;
    let mensajes = [];
    let aMostrar;
    for(let i = 0; i <= estaciones; i++){
        if(i === 5){
            cantidadPasajeros += 120 - 80;
        }
        if(i === 0){
            aMostrar = 'En la estación ' + i + ' hay ' + cantidadPasajeros + ' pasajeros arriba del tren';
            mensajes[i] = aMostrar.toString();
            continue;
        }
        cantidadPasajeros += 50 - 30
        aMostrar = 'En la estación ' + i + ' hay ' + cantidadPasajeros + ' pasajeros arriba del tren';
        mensajes[i] = aMostrar.toString();
    }
    return mensajes
}

console.log(reporteDePasajeros(0));
console.log(reporteDePasajeros(3));
console.log(reporteDePasajeros(5));
