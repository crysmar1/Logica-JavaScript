
const readline = require("readline-sync");

let capital = Number(readline.question("Qual valor deseja simular a aplicacao? "));
let taxa = Number(readline.question("Qual taxa deseja simular (%)? "));
let prazo = Number(readline.question("Qual prazo (meses)? "));

let montante = capital * (1 + (taxa / 100)) ** prazo;

console.log(`O capital de R$ ${capital} aplicado a taxa ${taxa}% no periodo de ${prazo} meses eh R$ ${montante.toFixed(2)}`);
