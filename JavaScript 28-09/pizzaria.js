// var dia = "quinta"
// var saborpiza = "marguerita"

// if (saborpiza == "marguerita") {
//     console.log("Começando a fazer pizza marguerita");
// }
// else if (saborpiza == "quatro queijos") {
//     console.log("Começando a fazer a pizza quatro queijos");
// }
// else {
//     console.log("Sabor da pizza informado não disponível!");
// }

//&& = and
// == é boleano, aqui precisa ser de marguerita, e precisa ser na quinta-feira

// if (saborpiza == "marguerita" && dia == "quinta") {
//     console.log("começando a fazer a pizza marguerita");
//     console.log("[PROMO]: Cliente ganhou uma bebida grátis")
// }

//Que fique claro que aqui ele determinou as variáveis no terminal

// if(saborpiza == "marguerita" && (dia == "quarta" || dia == "sabado")) {
//     console.log("[PROMO]: Cliente pizza em dobro")

// } aqui foi usado o "ou" e o 

var saborPizza = prompt("Qual o sabor de pizza que você quer?");
var dia = prompt("Qual o dia que você quer?")

if(saborpiza == "marguerita" && (dia == "quarta" || dia == "sabado")) {
    console.log("[PROMO]: Cliente pizza em dobro");}

