const readline = require('readline');

function question(question, timeout = 20000) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      rl.close();
      reject(new Error("Demorou muito"))
    }, timeout)
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    })
  })
}



let numeros = [0,1,2,3,4,5];

function sorteiaNumero(items,num){
    let index = Math.floor(Math.random() * items.length);
    let resultado = items[index];
    if(resultado == num){
        return resultado + "\n" + "Você venceu!"
    }else{
        return resultado + "\n" + "Você perdeu!"
    }
    
    
}

question("Adivinhe um número de 0 a 5" + "\n").
  then(num => sorteiaNumero(numeros,num)).
  then(resultado => console.log(resultado)).
  catch((erro) => console.log(erro)).
  then(() => process.exit(0))
