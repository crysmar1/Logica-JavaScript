/**
 * ## Soma dos ângulos internos de um polígono

Faça um programa que, a partir do número de lados de um polígono, imprima na tela a soma dos seus ângulos internos, conforme a fórmula abaixo:

 */

const numeroLados = 4;

let somaAngulos = (numeroLados - 2) * 180;
let angulo = somaAngulos / numeroLados;

console.log(`Soma dos angulos internos é ${somaAngulos} e o angulo é ${angulo}`);