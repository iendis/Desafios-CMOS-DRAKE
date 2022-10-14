let aluno = 
    {
        nome: "Junior",
        nota1: 5,
        nota2: 4
    }


function calcularMedia(x){
    return  `A média do aluno ${x.nome} é ${(x.nota1 + x.nota2) / 2}` //calcula a média
}

console.log(calcularMedia(aluno))