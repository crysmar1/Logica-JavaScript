const ladoA = 1;
const ladoB = 1;

if(ladoA === ladoB){

    switch(ladoA){
        case 0:
            console.log(`Bucha de Branco`);
            break;
        case 1:
            console.log(`Bucha de As`);
            break;
        case 2:
            console.log(`Bucha de Duque`);
            break;
        case 3: 
            console.log(`Bucha de Terno`);
            break;
        case 4:
            console.log(`Bucha de Quadra`);
            break;
        case 5:
            console.log(`Bucha de Quina`);
            break;
        case 6:
            console.log(`Bucha de Sena`);
            break;
        default:
            console.log(`Fora do escopo do jogo...`)
    }
}else {
    console.log(`Pedra normal`)
}