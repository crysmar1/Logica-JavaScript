// Usando node_modules para inputs
const readline = require("readline-sync");

console.log(`### Conversor Temperatura ###`);
console.log(`Escolha uma opção de conversão: \n
    1 - Celsius para Fahrenheit\n
    2 - Fahrenheit para Celsius`);
let opcao = Number(readline.question(`Opcao = `));
while((opcao !== 1) && (opcao !== 2)){
    console.log(`Opcao invalida!! Escolha uma opcao. 1 ou 2`);
    opcao = Number(readline.question(`Opcao = `));
}
const temp = Number(readline.question("Insira a temperatura a converter: "));
let fahr, celsius;
if(opcao === 1){
    fahr = temp * 1.8 + 32; // divisao de 5 por 9 é 1.8
    console.log(`Temperatura em Fahrenheit eh ${fahr.toFixed(1)} graus`);
} else {
    celsius = ((temp - 32) / 1.8);
    console.log(`Temperatura em Celsius eh ${celsius.toFixed(1)} graus`);
}