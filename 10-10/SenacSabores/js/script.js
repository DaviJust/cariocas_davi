// //Tudo o que é feito aqui aparece no console, então sempre olhe no console do inspcionar(Do navegador)
// console.log('Davi')

// var parteDoDia = 'Boa Tarde';
// // var nomeAluno = '
// // var salarioProfessor = "";
// // var parteDoDia = 4;
// var idadeInstrutor = 30;
// var alturaInstrutor = 1.84;

// // console.log(typeof(parteDoDia))
// //Evitar parenteses depois do typeof, e em outras situações das quais não são necessárias
// console.log(typeof parteDoDia)

// var comeuAlmoço = false;

// if(comeuAlmoço == true) {
//     console.log('Pode comer sobremesa')
// } else {
//     console.log('Não ganhou sobremesa')
// }
// Por padrão o booleano é true

//Senac sabores
//quatroQueijos, calabresa, frangoRequeijao

//queijo - grande - R$45.00
//calabresa - grande - R$47.00
//frangoRequeijao - grande - R$47.00




// var SaborPizza = prompt('Qual pizza você quer?')
// var diaSemana = prompt('Que dia é hoje')

// if(SaborPizza == "calabresa" && diaSemana == "sexta") {
//     console.log('Fazendo a pizza de calabresa')
//     console.log('Parabéns você ganhou um refri')
// }
// // se o cliente escolher calabresa e o dia for sexta OBS: Normal sentir necessidade de criar novas variáveis
// // o cliente ganha um refri convenção

// if(SaborPizza == "calabresa" && diaSemana == "sexta") {
//     console.log('Fazendo a pizza de calabresa')
//     console.log('Parabéns você ganhou um refri')
// }

// //Se o cliente escolher quatroQueijos e o dia for sexta ou sabado
// // ganhará frete grátis

var SaborPizza = prompt('Qual pizza você quer?')
var diaSemana = prompt('Que dia é hoje')

if(SaborPizza == 'quatroQueijos' &&(dia == 'sexta' || dia == 'sabado')) {
    console.log('Fazendo pizza quatro queijos')
    console.log('Frete 0800')
}