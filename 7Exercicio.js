// Questão 07
function dias(){
    let dia = prompt("Que dia é hoje: ")
    let mes = prompt("Qual mês é hoje: ")

    let dias_fim = (dia - 30)*-1
    let meses_fim = (mes - 12)*30*-1
    let calcul_dias = dias_fim + meses_fim

    alert ("Faltam" + calcul_dias + "para fim do ano")
}