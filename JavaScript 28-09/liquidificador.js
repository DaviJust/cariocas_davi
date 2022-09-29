//Função liquidificador, contém os parâmetros item1, item2, item3. Caso o item 1 seja igual à banana, and o item2 igual à leite, mais o item3

   liquidificar("Banana","Leite","Achocolatado")
function liquidificar(item1, item2, item3) {
    if (item1=='Banana' && item2=='Leite' && item3=='Achocolatado') {
    return 'Vitamina de banana';
    } else {
    return 'Liquidifiquei tudo!';
    }
   }
