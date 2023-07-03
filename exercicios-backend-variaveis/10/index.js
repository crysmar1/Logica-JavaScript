/**
 * $$ 5x^2 + 5x + 1 = 0 $$
 */

const a = 7;
const b = 3;
const c = 4;


let delta = (b ** 2) - 4 * (a * c);
let condicoesDelta = delta < 0 ? "equacao nao possui valores reais" : "equacao possui um ou dois valores reais"

console.log(`Valor de Delta é ${delta} e a ${condicoesDelta}`);