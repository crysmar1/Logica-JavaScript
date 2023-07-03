// Calcular distancia entre dois pontos

const readline = require("readline-sync");
console.log(`### Calculando a distancia entre dois pontos ###`)

const pontoX1 = readline.question("Informe x1. ");
const pontoY1 = readline.question("Informe y1. ");
const pontoX2 = readline.question("Informe x2. ");
const pontoY2 = readline.question("Informe y2. ");

const distancia = Math.abs(Math.sqrt(((pontoX2 - pontoX1)**2) + ((pontoY2 - pontoY1)**2)));

console.log(`A distancia entre os pontos eh ${distancia}`);