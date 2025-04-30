let total_dias = parseInt(478);
let total_anos = parseInt(total_dias / 360)
let resto_anos = parseInt(total_anos % 360)

let total_meses = parseInt(resto_anos / 30)
let resto_meses = parseInt(resto_anos % 30)

let total_em_dias = resto_meses

alert("A quantidade de anos foi: "+parseInt(total_anos)+ "\nA quantidade de meses foi: " +parseInt(total_meses)+ "\nA quantidade de dias foi: "+parseInt(total_em_dias))