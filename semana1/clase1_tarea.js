const {ask} = require('../helpers/input.js');

async function main(){
const num1 = Number(await ask('Ingresa el primer numero '));
const num2 = Number(await ask('Ingresa el segundo numero '));

const sum = num1 + num2;
const resta = num1 - num2;
const multiplicar = num1 * num2;
const dividir = num1 / num2;
console.log(`La suma de ${num1} y ${num2} es ${sum}`);
console.log(`La resta de ${num1} y ${num2} es ${resta}`);
console.log(`La multiplicacion de ${num1} y ${num2} es ${multiplicar}`);
console.log(`La division de ${num1} y ${num2} es ${dividir}`);

}

main();