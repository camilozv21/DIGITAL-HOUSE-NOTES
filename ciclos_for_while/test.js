let operacionesBancarias = [500, -800, -600, 900, 400];
function transferencias(array) {
    let depositos = 0;
    let retiros = 0;
    let saldoActual = 0;
    
    for (let i = 0; i < array.length; i++) {
        let elementoActual = array[i];
        saldoActual += elementoActual;
        if (elementoActual >= 0) {
            depositos += elementoActual;
        } else {
            retiros += elementoActual * (-1);
        }
    }
    return [depositos, retiros, saldoActual];
}

//transferencias(operacionesBancarias);

function persona(nombre, apellido, operaciones, callback) {
    let saldos = callback(operaciones)
    console.log("estimado" + nombre + " " + apellido);
    console.log("El monto total de depositos es de: $ " + saldos[0]);
    console.log("El monto total de retiros es de:$" + saldos[1]);
    console.log("Por lo tanto, su saldo actual es de:$" + saldos[2]);
}

persona("Renzo", "Magrassi", operacionesBancarias, transferencias);