//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
let mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
let totalJaPagoPeloAluno = 1000000;

let parcelaPagar = 0;

if(rendaMensalEmCentavos > 200000 && 
   mesesDecorridos <= 60 &&
   totalJaPagoPeloAluno <= 1800000){
        parcelaPagar = rendaMensalEmCentavos * 0.18;
        totalJaPagoPeloAluno += parcelaPagar;
        mesesDecorridos++;
        console.log(`O valor da parcela desse mês é R$ ${(parcelaPagar/100).toFixed(2)} reais`);
} else {
    if(rendaMensalEmCentavos < 200000){
        console.log(`O valor da parcela desse mês é R$ ${(parcelaPagar/100).toFixed(2)} reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
    }else if(mesesDecorridos > 60){
        console.log(`O valor da parcela desse mês é R$ ${(parcelaPagar/100).toFixed(2)} reais. Nenhum valor é devido pois prazo do estudante está acima do valor máximo de 60 meses.`);
    }else {
        console.log(`O valor da parcela desse mês é R$ ${(parcelaPagar/100).toFixed(2)} reais. Nenhum valor é devido pois o valor total do estudante está acima do valor máximo de R$ 18000 reais.`);
    }
}