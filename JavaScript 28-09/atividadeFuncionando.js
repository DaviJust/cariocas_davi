//Aqui executaremos duas funções
verificarPermissoes(19)
function verificarPermissoes(idade) {
if (idade=>18) {
    return console.log('Ele pode votar e dirigir');
    } if (idade==16 || idade==17) {
        return console.log("Ele só pode votar");
    }
    else {
        return console.log('Não pode votar, nem dirigir');
        }
       }

previsaoRodagem(10,80)
function previsaoRodagem(gasolina,quilometragem) {
return console.log("Ele pode rodar " +  gasolina * quilometragem + " por KM/h");
}