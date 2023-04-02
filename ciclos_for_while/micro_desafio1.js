const calculoSueldo = array =>{
    let depositos = 0, retiros = 0, saldoActual = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            depositos += array[i]
        } else{
            retiros += array[i] * -1
        }
    }
    saldoActual = depositos - retiros
    console.log(saldoActual)
    return [depositos, retiros, saldoActual]
}

const infoCliente = (nombre, apellido, sueldo, callback) =>{
    montos = callback(sueldo);
    depositos = montos[0];
    retiros = montos[1];
    saldoActual = montos[2];

    return "Estimad@ " + nombre + apellido + "\nEl monto total de los depositos es de: $" + depositos + ".\nEl monto total de los retiros es de: $" + retiros + ".\nPor lo tanto, su sueldo actual en la cuenta es de : $" + saldoActual; 
}


let operaciones = [10, 26, 68, -54, 25, -12, -2, 87, 35, -40, 200];
let test = [10, -5, 4];
console.log(infoCliente("Juan", "Zapata", operaciones, calculoSueldo))