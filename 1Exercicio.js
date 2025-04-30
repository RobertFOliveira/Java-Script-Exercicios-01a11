//1. A imobiliária Imóbilis vende apenas terrenos retangulares. Faça um algoritmo para ler as dimensões de um terreno e depois exibir a área do terreno.

// Função para calcular a área
function calcularAreaTerreno() {
    return largura * comprimento;
}

// Entradas (dimensões do terreno)
let largura = parseFloat(prompt("Digite a largura do terreno (em metros):"));
let comprimento = parseFloat(prompt("Digite o comprimento do terreno (em metros):"));

// Cálculo da área
let area = calcularAreaTerreno(largura, comprimento);

// Exibição do resultado
alert(`A área do terreno é ${area.toFixed(2)} metros quadrados.`);


