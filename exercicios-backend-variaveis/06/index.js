/**
 * Calculo velocidade média
 * Usando node_modules para inputs de usuários */

const readline = require('readline-sync');

console.log(`### Calcule a velocidade media ###`);

const distanciaPercorrida = Number(readline.question(`Qual a distancia a ser percorrida (em Metros)? `));
const tempoGasto = Number(readline.question(`Qual a expectativa de tempo gasto (em Segundos)? `));

const velocidadeMedia = (distanciaPercorrida / tempoGasto) * 3.6;

console.log(`Velocidade de ${velocidadeMedia} km/h`);