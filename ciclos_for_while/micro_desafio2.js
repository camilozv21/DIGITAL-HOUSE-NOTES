const tabalaMultiplicar = () =>{
    for(let i = 1; i <= 10; i++){
        console.log('Tabla del ' + i + '\n---------------');
        for(let k = 1; k <= 10; k++){
            let resultado = i * k
            console.log(i +' * ' + k +' = '+ resultado)
        }
        console.log('---------------');
    }
}
tabalaMultiplicar()

// const tabalaMultiplicar = () =>{
//     for(let i = 1; i <= 10; i++){
//         let resultado = 1 * i;
//         console.log(1 + ' * ' + i + ' = ' + resultado);
//     }
//     for(let i = 1; i <= 10; i++){
//         let resultado = 2 * i;
//         console.log(2 + ' * ' + i + ' = ' + resultado);
//     }
//     for(let i = 1; i <= 10; i++){
//         let resultado = 3 * i;
//         console.log(3 + ' * ' + i + ' = ' + resultado);
//     }
//     for(let i = 1; i <= 10; i++){
//         let resultado = 4 * i;
//         console.log(4 + ' * ' + i + ' = ' + resultado);
//     }
// }

// tabalaMultiplicar()