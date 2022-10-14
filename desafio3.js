let listaNumeros = [3,19,10,22,23,9,7,32,2,16,21,13]

maiorNumero = listaNumeros[0];
menorNumero = listaNumeros[0];


for (let i = 0; i < listaNumeros.length; i++){ // verifica qual é o menor número e qual é o maior número
    var numero = listaNumeros[i];

    if(numero > maiorNumero){
        maiorNumero = numero;
    }

    if(numero < menorNumero){
        menorNumero = numero;
    }
}
let divisao = maiorNumero / menorNumero;
let resultadoDivisaoPresente = "Não há uma variável na lista com o mesmo valor da divisão!";

for (let i = 0; i < listaNumeros.length; i++){ // verifica se há uma variável na lista com o mesmo valor da divisão
    if(listaNumeros[i] == divisao){
        resultadoDivisaoPresente = "Há uma variável na lista com o mesmo valor da divisão!";
        break;
    }
}

console.log("O maior número é " + maiorNumero + ", o menor número é " + menorNumero + " e a divisão desses números é de " + divisao + "\n" + resultadoDivisaoPresente);



