let carteira = 100;

function calculaDolar(x){
    let valorDolar = 5.13;
    return x / valorDolar;
}

console.log("Você tem " + calculaDolar(carteira).toFixed(2) + " Dólar")