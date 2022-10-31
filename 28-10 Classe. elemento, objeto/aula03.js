class Pessoa {
    nome;
    idade;
    cpf;
}

const pessoa1 = new Pessoa();
pessoa1.nome = 'William'
pessoa1.idade = 30;
pessoa1.cpf = 11122233344;

console.log(pessoa1)

//Modelando uma lampada

class Lampada {
    cor;
    watz;
    marca;
    function acender() {
        return 'A lâmpada está acesa'
        
    },
    function apagar() {
        return 'A lâmpada está apagada'
    }
}