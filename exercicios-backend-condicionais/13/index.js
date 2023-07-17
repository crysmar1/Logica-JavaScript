//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorFinal = 0;

if(tipoDePagamento === "debito" || tipoDePagamento === "dinheiro"){
    valorFinal = valorDoProduto - (valorDoProduto * 0.1);
}else if(tipoDePagamento === "cheque"){
    valorFinal = valorDoProduto - (valorDoProduto * 0.03);
}else {
    valorFinal = valorDoProduto - (valorDoProduto * 0.05);
}
console.log(`Valor a ser pago: R$${(valorFinal/100).toFixed(2)}`);