function createCachorro(nomes, peso, raca) {
  return {
    nome: nomes,
    peso: peso,
    raca: raca,
  };
}
let adotar =  { adotou() {
    return  this.nome + 'au au'
}}

let cachorro = createPerson('Karl Marx','50','Pastor Alemao')

console.log(cachorro.adotou)

//https://www.javascripttutorial.net/javascript-factory-functions/