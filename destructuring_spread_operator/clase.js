//-------------------Destructuring-------------------------
let colores = ['a','v','c'];

let [azul,verde,celeste] = colores;

console.log(azul);

let persona = {
    nombre: 'juanchito',
    apellido: 'Zapata',
    edad: 22
};

let {edad,nombre} = persona;

console.log(nombre, edad);

const generarNombreCompleto = ({nombre, apellido}) => {
    console.log(nombre + ' ' + apellido)
}

generarNombreCompleto(persona);
//-------------------Spread operator-------------------------

// let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let {1: segundo, 3: cuarto} = miArray;

// console.log(segundo); // imprime 2 
// console.log(cuarto); // imprime 4

const dato1 = {
    datoA: 123,
    datoB: 12443,
}

const dato2 = {
    datoC: 123,
    datoD: 12443,
}

const datos = {
    ...dato1,
    ...dato2
}
console.log(datos)

const estudiante = {
    nombre: 'juan camilo',
    promedio: 4.5
}

const datoABuscar = 'nombre';

console.log(estudiante[datoABuscar]);

//-------------------Rest operator-------------------------

const sumar = (...numeros) => {
    console.log(numeros.reduce((total,el) => total + el, 0));
}

sumar(5,3,4)