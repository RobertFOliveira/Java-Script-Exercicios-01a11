//  5. Um motorista deseja colocar no seu tanque X reais de gasolina. Escreva um algoritmo para ler opreço do litro da gasolina e o valor do pagamento, e exibir quantos litros ele conseguiu colocar no tanque
function gasolina() {
    let vl_combustivel = prompt("Qual o Valor do combustivel: ")
    let vlf_combustivel = prompt("Qual o Valor você pagou: ")

    let litros_combustivel = vlf_combustivel/vl_combustivel
    alert("Você abasteceu" +litros_combustivel+ " Lt's de combustivel")

}