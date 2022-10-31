
// // var umNomeQualquer = 'William';
// // var umNomeQualquer = 'Daisy';
// // var umNomeQualquer = 'Mayara';
// var invetedList = [
//     'William',
//      'Daisy',
//     'Mayara'];
// //Sempre usar aspas limpas nisso, só usar quando for necessário.

// // var ageList = [
// //     30,
// //     80,
// //     26,
// // ];

// var unvitedList = [invetedList.pop()]

// invetedList.push('Antonio','Guilherme','Erick');

// // document.write(invetedList);
// document.write(unvitedList);

// var listaConvid = ['Vê', 'Thomaz', 'Cinthia', 'Luiz', 'Nic'];
// var indice = 0;
// while( indice < listaConvid.length ) {
//  alert(listaConvid[indice]);
//  indice++;
// }

// alert()

// //sorteio específico
// var sorteio54454 = [12, 32, 45, 60, 42, 7];
// //histório dos sorteios
// var sorteios = [
//  [32, 15, 27, 55, 12, 38],
//  [25, 17, 13, 22, 06, 01],
//  [16, 18, 15, 38, 23, 29]
// ];

// var feira = ['goiaba', 'maçã', 'couve', 'cenoura'];
// var naoComprei = []
// naoComprei = feira.splice(2,2);

// document.write(naoComprei)

// var feira = ['goiaba', 'maçã', 'couve', 'cenoura'];
// feira[0] = 'pastel';


//fonte https://www.w3resource.com/javascript/form/email-validation.php
var email = prompt('Digite seu e-mail')
var cpf = prompt('digite seu cpf')

function validateEmail()
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.match(mailformat))
{
    alert(`Valor ${email} fornecido para o tipo ${typeof(email)} de valor valido!`);
return true;
}
else
{
    alert(`Valor fornecido para o tipo ${typeof(email)} inválido! Insira novamente`);
return false;
}
}

//fonte: https://pt.stackoverflow.com/questions/11045/express%C3%A3o-regular-para-validar-um-campo-que-aceita-cpf-ou-cnpj

function validateCPF(){
    var cpfFormat = "^([0-9]{11})"
if(cpf.match(cpfFormat)){
    alert(`Valor ${cpf} fornecido para o tipo ${typeof(cpf)} de valor valido!`);
return true;
}
else
{
alert(`Valor fornecido para o tipo ${typeof(cpf)} inválido! Insira novamente`);
return false;
    
}

}