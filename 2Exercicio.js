//2. Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar todos os cavalos comprados para um haras.

// Função para calcular o número total de ferraduras necessárias
function calcularFerraduras(numeroCavalos) {
    const ferradurasPorCavalo = 4; // Cada cavalo necessita de 4 ferraduras
    return numeroCavalos * ferradurasPorCavalo;
}

// Solicitar ao usuário o número de cavalos comprados
const numeroCavalos = parseInt(prompt("Digite o número de cavalos comprados para o haras:"));

// Validar a entrada e exibir o resultado
if (isNaN(numeroCavalos) || numeroCavalos <= 0) {
    console.log("Por favor, insira um número válido e maior que zero para o número de cavalos.");
} else {
    const totalFerraduras = calcularFerraduras(numeroCavalos);
    console.log(`Você precisará de ${totalFerraduras} ferraduras para equipar todos os cavalos.`);
}

let