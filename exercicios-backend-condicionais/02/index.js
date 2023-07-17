const jogada1 = 11;
const jogada2 = 41;

//seu código aqui

const resultado = Number(jogada1 + jogada2);

if(resultado % 2 === 0) {
    console.log(`Quem escolheu PAR venceu...`);
} else{
    console.log(`Quem escolheu IMPAR venceu...`);
}