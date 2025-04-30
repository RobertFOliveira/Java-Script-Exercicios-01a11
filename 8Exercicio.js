// 08. Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua média ponderada (as notas tem pesos respectivos de 1, 2 e 3)
function media_notas(){
    let nota_1 = Number(prompt("Digite a primeira nota: "))
    let nota_2 = Number(prompt("Digite a segunda nota: "))
    let nota_3 = Number(prompt("Digite a terceira nota: "))

    let media = (nota_1+nota_2+nota_3)

    alert("A média é "+media)
}