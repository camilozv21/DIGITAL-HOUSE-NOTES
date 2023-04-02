const dominio = texto => "http://www." + texto

dominio("digitalhouse.com.ar")

let frase = 'Hola!, soy Carli';

frase.slice(frase.indexOf('Carli'))

function pasandoPorI(){
    for(let i=0;i<5;i++){
        console.log("acá i tiene el valor de "+i)
    }
}
pasandoPorI()
let numero = 5
let i = 1
while(i <= 10){
    let resultado = i * numero
   console.log(numero ,'*' , i,'=' , resultado)
   i++;
}

//------------------------------------------clase array*-----------------------

let prueba = ["ma","me","mi","mo","mu"];
console.log(prueba[3]);