let operacionMatematica = 'division';
let n1 = 4, n2 = 8;

switch (operacionMatematica) {
    case 'suma':
        console.log("Suma: ", n1 + n2);
        break;
    case 'resta':
        console.log("Resta: ", n1 - n2);
        break;
    case 'multiplicación':
        console.log("Multiplicación:", n1 * n2);
        break;
    case 'division':
        console.log("Division: ", n1 / n2);
        break;
    default:
        console.log("Esta no es una operación válida");
        break;
}