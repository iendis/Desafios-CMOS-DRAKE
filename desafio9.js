let people = [
    {
        nome: "Julio",
        nascimento: 1976
    },
    {
        nome: "Iendis",
        nascimento: 2004
    },
    {
        nome: "Lúcio",
        nascimento: 2006
    },
    {
        nome: "Paulo",
        nascimento: 2002
    },
    {
        nome: "Dalton",
        nascimento: 2000
    },
    {
        nome: "Manuela",
        nascimento: 2010
    },
    {
        nome: "Ana",
        nascimento: 1920
    }
];

function alunosAprovados(arr){
    let maiores = [];
    let menores = [];
    for(let i = 0; i < arr.length; i++){
        const { nascimento, nome} = arr[i];

        if(nascimento <= 2004){
            maiores.push(nome)
        }else{
            menores.push(nome)
        }
    }
    return maiores.length + " pessoas são de maior!" + "\n" + menores.length + " pessoas são de menor!"
}

console.log(alunosAprovados(people))