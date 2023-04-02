// punto 2
let electrodomesticos = ['TV', 'lavadora', 'estufa', 'nevera', 'horno', 'tostadora'];

// Punto 3.1
console.log(electrodomesticos[3]);
console.log(electrodomesticos[1]);
console.log(electrodomesticos[5]);

// punto 3.2
let aux = electrodomesticos.shift();
electrodomesticos.push(aux);

// punto 3.3
electrodomesticos.push('waflera','licuadora');

// punto 3.4
console.log(electrodomesticos.length);

// punto 3.5
let estado = electrodomesticos.includes('estufa')
let mensaje = estado ? console.log('Producto encontrado') : console.log('El producto buscado no existe');

// punto 3.6
let textoPorComas = electrodomesticos.join(' ');

// punto 3.7
console.log(textoPorComas.length);

// punto 3.8
textoPorComas = textoPorComas.replace('waflera', 'aspiradora');

// punto 3.9
let electrodomesticosActualizado = textoPorComas.split(' ')
console.log(electrodomesticosActualizado);