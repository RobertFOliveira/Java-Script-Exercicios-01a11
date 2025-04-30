// 9. Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo vendida respectivamentepor 10, 12 e 15 reais. Construa um algoritmo em que o usuário forneça a quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina informe quanto será o valor arrecadado.
function camiseta(){
    let tamanho_p = Number(prompt("Quantas camisas pequenas: "))
    let tamanho_m = Number(prompt("Quantas camisas média: "))
    let tamanho_g = Number(prompt("Quantas camisas grande: "))

    let valor_faturamento = (tamanho_p * 10) + (tamanho_m * 12) + (tamanho_g * 15)

    alert("valor total de R$" + valor_faturamento)

}