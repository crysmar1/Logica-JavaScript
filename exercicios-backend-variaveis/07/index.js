/**
 * Casos de COVID-19 - Calculando a transmissao do virus
 */
console.log(`### Analise preditiva de infeccao ###`);

const populacaoInicialInfectada = 1000; //populacao inicial 
const pessoasTransmitir = 4; // pode transmitir para até 4 pessoas
const tempoPercorrido = 7; // no decorrer de 7 dias

const preditiva = (populacaoInicialInfectada * pessoasTransmitir) ** (tempoPercorrido / 7);

console.log(`Isso significa que, após ${tempoPercorrido} dias, 
o total de pessoas infectadas será de ${preditiva}, 
uma vez que inicialmente existiam ${populacaoInicialInfectada} pessoas infectadas.`);