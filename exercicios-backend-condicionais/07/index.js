const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui
const limiteGanhos = 2855970;

if(aposentada || portadoraDeDoenca) {
    console.log(`ISENTA`);
}else if(totalDeRendimentos > limiteGanhos) {
    console.log(`PEGA LEAO`);
}else {
    console.log(`VAZA LEAO! JA TA DIFICIL SEM VOCE`)
}