// Usando node_modules para inputs
const readline = require("readline-sync");

console.log(`### Calcule o seu IMC ###`);
console.log(`Insira as informações abaixo...`);

const peso = Number(readline.question("Qual o seu peso? "));
const altura = Number(readline.question("Qual sua altura? "));
const IMC = peso / (altura ** 2)

console.log(IMC.toFixed(2));