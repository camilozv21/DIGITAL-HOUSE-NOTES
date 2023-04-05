let pagoMes = 1200;
let consumoKWH = 200;
let aumentoPorcentaje;

if(consumoKWH >= 300){
    aumentoPorcentaje = pagoMes * 0.2
} else{
    aumentoPorcentaje = 0
}

let montoTotal = pagoMes + aumentoPorcentaje;

console.log(montoTotal);