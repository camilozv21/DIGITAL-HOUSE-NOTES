const movies = require('./peliculas');
const fs = require('fs');


console.log('\n')
for(let i = 0; i < movies.length; i++){
    let aux = 'The movie identified with the id number: ' + movies[i].id + ' has this awards: '+ movies[i].awards.join(', ') + ". Its price is: " + movies[i].price + ' $' + '\n';
    fs.appendFileSync('./consoleMessage.txt',aux,'utf-8')
}
console.log('\n')

let message = fs.readFileSync('./mensaje.txt','utf-8')

console.log(message)
//`Hola ${message} texto más`