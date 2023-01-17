function potencia(numero, expoente) {
    if(expoente === 0) {
        return 1;
    }
    let resultado = numero;
    for(let i = 0; i < expoente; i++) {
        resultado *= numero;
    }
    return resultado;
}

alert(potencia(3,2));













/* return
function foo(numero) {
    alert("numero");
    if (numero === 7) {
        return ("igual a 7"); //parar uma função é possível escrever uma mensagem
    }
    alert("Diferente de 7");
}

let mensagem = foo(7);
alert(mensagem);
*/

/*
for(let i = 0; i < 10; i++) {
    
    alert("numero");

    if(i === 3) {
        
        //break; para imediatamente a contar no 2
        continue; //não conta o número 3
    }

    alert(i);
}
*/





/*variável global é declarada fora de uma function

var mensagem = "mensagem global"
//let mensagem = "mensagem global"

function minhafuncao() {
    //var mensagemLocal = "mensagem local";
    //var mensagem = "mensagem local";
    let mensagem = "mensagem local"
    //alert(mensagemLocal); só existe dentro da function
    alert(mensagem);
}

//alert(mensagem);
//alert(mensagemLocal); só existe dentro da function
minhafuncao()*/

/* Escopo VAR não respeita ESCOPO
function minhaFuncaoDia() {
    let mensagem = "Bom dia";
    alert(mensagem);

    if(true) {
        //let foo = "Boa tarde";
        var foo = "Boa tarde";
        alert(foo);
    }
        alert(foo);
}

function minhaFuncaoNoite() {
    let mensagem = "Boa noite";
    alert(mensagem);
}

minhaFuncaoDia();
minhaFuncaoNoite();
*/