// First
const mayusculas = palabra => {
    palabra = palabra.toLowerCase()
    console.log(palabra);
    return palabra.toUpperCase()
}

console.log(mayusculas("HOLAaaaaA"))
// ------------------------------------------
// Second
const typeparamether = paramether => typeof(paramether)

let array = [1,4,6]
array.push([4,7,6,5])
console.log(typeparamether(array))

//---------------------------------------------
// Third
const dogsAge = years => years * 7
console.log(dogsAge(5));
//---------------------------------------------
// Fourth
const salary = (salarioMensual, dias, horasDias) => (salarioMensual / dias) / horasDias
console.log(salary(100000,28,8));