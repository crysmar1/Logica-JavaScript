const capitalInicial = 60000;
const numeroMeses = 24;
const montante = 90000;

let pot = montante ** (1 / numeroMeses)

const taxa = (((montante / capitalInicial) ** (1 / numeroMeses)) - 1) * 100;

console.log(`O seu financiamento de ${capitalInicial} reais,
 teve uma taxa de juros de ${taxa.toFixed(3)}%, pois após ${numeroMeses} meses 
 você teve que pagar ${montante} reais.`);