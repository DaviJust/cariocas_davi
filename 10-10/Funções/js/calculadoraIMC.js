var alturaUsuario = prompt('Qual a sua altura ?');
var pesoUsuario = prompt('Qual o seu peso ?');
var imc = peso / (altura * altura)

function imcUsuario () {
    if (imc < 17) {
        return ('Muito abaixo do peso')
    } else if(imc >= 17 && imc <= 18.49) {
        return 'Abaixo do peso'
    } else if(imc >= 25 && imc <= 24.99) {
        return 'Peso normal'
    } else if(imc >= 25 && imc <= 29.99) {
        return 'Acima do peso'
    } else if(imc >= 30 && imc <= 34.99) {
        return 'Obesidade'
    } else if(imc >= 35 && imc <= 39.99) {
        return 'Obesidade 2 (SEVERA)'
    } else if(imc >= 40) {
        return 'Obesidade 3(Mórbida)'
    }
}

alert(imcUsuario())

//parametros = variáveis coringas
