let ano = 2100;

function verificaBisexto(x){
    if(x % 4 == 0){
        if(x % 100 == 0){
            if(x % 400 == 0){
                return "O ano é bissexto!"
            }
        }
    }
    return "O ano não é bissexto!"
}

console.log(verificaBisexto(ano));