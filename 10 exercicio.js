// 10.
//Modelo Usando parseInt
/*Usando parseInt() ou parseFloat()*/
console.log("Usando parseInt() ou parseFloat() - 8.5")
a = "5";
b = "3.5";

let resultado1 = parseInt(a) + parseInt(b);   // 8
console.log(resultado1)
let resultado2 = parseFloat(a) + parseFloat(b); // 8.5
console.log(resultado2)

/*Usando o operador unário + (atalho esperto)*/
console.log("Usando o operador unário + (atalho esperto) - 8")
a = "5";
b = "3";
resultado = +a + +b; // 8
console.log(resultado)

function calcularDistancia(x1, y1, x2,y2) {
    const deltax = x2 - x1;
    const deltax = y2 - y1;
    const distancia = Math.sqrt(deltax ** 2 + deltay ** 2)
}
