//1. 3. A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de broas a cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,50. Ao final do dia, o dono quer saber quanto arrecadou com a venda dos pães e broas (juntos), e quanto deve guardar numa conta de poupança (10% do total arrecadado). Você foi contratado para fazer os cálculos para o dono. Com base nestes fatos, faça um algoritmo para ler as quantidades de pães e de broas, e depois calcular os dados solicitados.

const precoPao = 0.12; // Preço de um pão
const precoBroa = 1.50; // Preço de uma broa

// Função para calcular vendas
function calcularVendas(quantidadePoes, quantidadeBroas) {
    // Calculando o total arrecadado
    const totalArrecadado = (quantidadePoes * precoPao) + (quantidadeBroas * precoBroa);
    
    // Calculando o valor a ser guardado na poupança (10% do total arrecadado)
    const valorPoupanca = totalArrecadado * 0.10;
    
    // Exibindo os resultados
    console.log(`Valor total arrecadado: R$ ${totalArrecadado.toFixed(2)}`);
    console.log(`Valor a ser guardado na poupança: R$ ${valorPoupanca.toFixed(2)}`);
}

// Exemplo de uso
const quantidadePoes = prompt("Digite a quantidade de pães vendidos: ");
const quantidadeBroas = prompt("Digite a quantidade de broas vendidas: ");

calcularVendas(Number(quantidadePoes), Number(quantidadeBroas));