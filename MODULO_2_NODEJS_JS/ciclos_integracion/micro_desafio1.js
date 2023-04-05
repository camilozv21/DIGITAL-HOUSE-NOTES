function montoAPagar (arrayMultidimensional, arraySimple){
    let montoTotal = 0;
    for(let i = 0; i < arrayMultidimensional.length; i++){

        let aux = arraySimple[i].toLowerCase();
        //console.log(arrayMultidimensional[i])
        if(arrayMultidimensional[i][0].includes(aux)){
            montoTotal += arrayMultidimensional[i][1];
        }
    }
    //console.log(montoTotal)
    return montoTotal
}

function datosAlumno(nombre, apellido, cursosPrecios, cursos, cb){
    console.log('Estimado ' + nombre + ' ' + apellido + ' , en función de los cursos seleccionados: \n' + 
    cursos + '\n' + '. El monto a pagar es de: ' + cb(cursosPrecios, cursos))
}

let cursosPrecios = [['html5', 4000], ['css3', 5000], ['javascript', 10000], ['react', 7000], ['nodejs', 15000]];
let cursos = ['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT', 'NODEJS'];

datosAlumno('Agustina', 'Rodriguez', cursosPrecios, cursos, montoAPagar);
