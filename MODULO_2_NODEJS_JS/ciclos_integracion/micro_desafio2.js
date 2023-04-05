function promedioC(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += Number(array[i]);
    }
    return suma / array.length;
}
function promedioGraduados(html5, css3, js, node, numero){
    let suma = 0;
    let promedio;
    
    if(numero == 1){

        promedio = promedioC(html5)
    }
    else if(numero === 2){

        promedio = promedioC(css3)
    }
    else if(numero === 3){

        promedio = promedioC(js)
    }
    else if(numero === 4){

        promedio = promedioC(node)
    }
    else{
        console.log('Recuerde que los números del curso corresponden a: \n1 = HTML5\n2 = CSS3\n3 = JAVASCRIPT\n5 = NODEJS');
        return ' '
    }
    return promedio
}

let graduadosHTML5 = '30 45 25 34 18 23 16 50 72 70';
let graduadosCSS3 = '50 45 71 34 23 45 65 75 63 43 74 70';
let graduadosJAVASCRIPT = '70 65 58 45 23 57 34 17 72';
let graduadosNODEJS = '45 56 73 34 65 72 70 32';

graduadosHTML5 = graduadosHTML5.split(' ');
graduadosCSS3 = graduadosCSS3.split(' ');
graduadosJAVASCRIPT = graduadosJAVASCRIPT.split(' ');
graduadosNODEJS = graduadosNODEJS.split(' ');

console.log(promedioGraduados(graduadosHTML5, graduadosCSS3, graduadosJAVASCRIPT, graduadosNODEJS, 1));
