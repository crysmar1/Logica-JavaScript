const apelido = "";
const primeiroNome = "";
const sobrenome = "Bros";

if(sobrenome){
    console.log(`${primeiroNome} ${sobrenome}`);
}else if(apelido){
    console.log(apelido);
}else if(primeiroNome){
    console.log(primeiroNome);
}else{
    console.log(`Primeiro nome obrigatório`);
}