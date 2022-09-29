let nota1 = document.getElementById("nota 1").innerText;
let nota2 = document.getElementById("nota 2").innerText;
let nota3 = document.getElementById("nota 3").innerText;
let nota4 = document.getElementById("nota 4").innerText;

document.getElementById("calcular") = nota1 + nota2 + nota3 + nota4

if(calcular <= 5) {
    console.log("aprovado")
}else {
    console.log("reprovado")
}
    // O usuário digita quatro notas do semestre, e vai retornar o valor se a média for x está aprovado, caso contrário reprovado//