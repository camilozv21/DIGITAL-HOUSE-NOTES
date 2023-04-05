// Punto 1
const numerosSiguientes = numero => {
    for(let i = numero; i <= numero + 10; i++){
        console.log(i);
    }
}
//numerosSiguientes(3)

const tresEnTres = () =>{
    for(let i = 1; i <= 57; i += 3){
        console.log(i)
    }
}
//tresEnTres()

const sumatoriaNumeros100 = () => {
    let suma = 0;
    for(let i = 0; i <= 100; i++){
        suma += i
    }
    console.log('La sumatoria de los números entre el 0 y el 100 es: ' + suma);
}
//sumatoriaNumeros100();

const mostrarCadenaMayuscula = texto => {
    for(let i = 0; i < texto.length; i++){
        console.log(texto[i].toUpperCase())
    }
}
//mostrarCadenaMayuscula('practicando el uso de los ciclos o bucles');

const regresarValoresPares = array => {
    let pares = [];
    for(let i = 0; i <= array.length; i++){
        if(array[i] % 2 === 0){
            pares.push(array[i])
        }
    }
    console.log(pares);
}
//regresarValoresPares([11,15,167,17,18,24,53,50,41,69,87,88,66,25,28])

function laClaveSecreta(clave){
    let array = [];
    let dim = clave.length;
    for(let i = 0; i < dim; i++){
        let aux = clave.pop();
        array[i] = aux;
    }
    let claveSeparada = array.join('');
    claveSeparada = claveSeparada.split('*')
    claveSeparada = claveSeparada.join('')
    console.log(claveSeparada)
    return claveSeparada
}

console.log(laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]))

laClaveSecreta([ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"])