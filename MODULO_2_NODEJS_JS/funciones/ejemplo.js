function triple(numero){
    return numero * 3
}

function tripleDeLaSuma(nuemro3, numero4){
    let resultado = nuemro3 + numero4
    return triple(resultado)
}

console.log(tripleDeLaSuma(3,4));

function sumatoriaBajoImporte(arreglo){
    let sumatoria = 0;
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] > 0 && arreglo[i] <= 1000){
            sumatoria += arreglo[i]
        }
    }
    return sumatoria
}

let arreglo = [300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]
console.log(sumatoriaBajoImporte(arreglo))


function asientosDisponibles(asientosDisponibles, asiento){
    let estado = asientosDisponibles.includes(asiento)
    console.log(estado)
    if(estado == true){
        return ("Felicitaciones, el asiento número " + asiento + " está disponible")
    } 
    else{
        return ("Lo sentimos, el asiento número " + asiento + " está ocupado, pero aún quedan " + asientosDisponibles.length + " asientos disponibles")
    }
}

console.log(asientosDisponibles([3, 15, 18, 25], 25))
console.log(asientosDisponibles([3, 15, 18, 25], 78))
console.log(asientosDisponibles([3, 15, 18, 25, 35], 78))
console.log(asientosDisponibles([3, 15, 18, 25], 18))