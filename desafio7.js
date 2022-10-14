let qualDistanciaKm = 250;
let valorPassagem;

function calculaPassagem(x,y){
    if( x <= 200){
        y = x * 0.50
        return y
    }else{
        y = x * 0.45
        return y
    }
}

console.log(calculaPassagem(qualDistanciaKm,valorPassagem))