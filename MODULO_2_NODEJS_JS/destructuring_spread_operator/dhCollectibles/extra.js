let array = [34, 54, 2, 356, 765, 67, 3, 456, 85, 234];

let [cero, , dos, , cuatro] = array;

let nuevoArray = array.filter(el => el != cero && el != dos && el != cuatro);

console.log(cero, dos, cuatro);
console.log(nuevoArray);

let mascota = {
    nombre: 'max',
    tipoMascota: 'perro',
    color: 'blanco y café',
    raza: 'Chitzú'
};

let { nombre, tipoMascota, color, raza } = mascota
console.log(nombre, tipoMascota, color, raza);

