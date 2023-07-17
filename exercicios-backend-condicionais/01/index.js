const jogada1 = "tesoura"
const jogada2 = "pedra"

//seu código aqui
if(jogada1 === "pedra"){
    if(jogada2 === "tesoura"){
        console.log(`Pedra quebra tesoura`);
    }else if(jogada2 === "pedra"){
        console.log(`Empate...`);
    }else if(jogada2 === "papel"){
        console.log(`Papel embrulha a pedra`);
    }else{
        console.log(`Nao é uma opcao valida!`)
    }
} else if(jogada1 === "tesoura"){
    if(jogada2 === "tesoura"){
        console.log(`Empate...`);
    }else if(jogada2 === "pedra"){
        console.log(`Pedra quebra tesoura`);
    }else if(jogada2 === "papel"){
        console.log(`Papel embrulha a pedra`);
    }else{
        console.log(`Nao é uma opcao valida!`)
    }
}