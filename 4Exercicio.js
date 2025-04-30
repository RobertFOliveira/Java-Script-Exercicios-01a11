//4. Escreva um algoritmo para ler o nome e a idade de uma pessoa, e exibir quantos dias de vida ela possui. Considere sempre anos completos, e que um ano possui 365 dias. Ex: uma pessoa com 19 anos possui 6935 dias de vida; veja um exemplo de saída: MARIA, VOCÊ JÁ VIVEU 6935 DIAS


// Solicita ao usuário dois números e calcula a soma
function nomeidade(){
let nome = parseFloat(prompt("Digite o seu nome: "));
let idade = parseInt(prompt("Digite sua idade: "));

soma = idade * 365
alert(nome + "você já viveu" + soma);

}


