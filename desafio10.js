let people = [
    {
        nome: "João",
        nacionalidade: "Brasileiro" ,
        idade: 45
    },
    {
        nome: "Anne",
        nacionalidade: "Canadense" ,
        idade: 14
    },
    {
        nome: "Johnny",
        nacionalidade: "Estadunidense" ,
        idade: 63
    },
    {
        nome: "Juan",
        nacionalidade: "Mexicano" ,
        idade: 12
    },
    {
        nome: "Akira",
        nacionalidade: "Japonês" ,
        idade: 34
    },
    {
        nome: "Yasuo",
        nacionalidade: "Japonês" ,
        idade: 20
    },
    {
        nome: "Luis",
        nacionalidade: "Brasileiro" ,
        idade: 80
    },
    {
        nome: "Paul",
        nacionalidade: "Estadunidense" ,
        idade: 15
    },
    {
        nome: "Lian",
        nacionalidade: "Chinês" ,
        idade: 32
    },
    {
        nome: "Mary",
        nacionalidade: "Italiana" ,
        idade: 76
    },
    {
        nome: "Carmen",
        nacionalidade: "Colombiana" ,
        idade: 6
    },
    {
        nome: "Josefa",
        nacionalidade: "Colombiana" ,
        idade: 17
    },
    {
        nome: "Isabel",
        nacionalidade: "Espanhol" ,
        idade: 5
    },
    {
        nome: "Jesus",
        nacionalidade: "Espanhol" ,
        idade: 41
    },
    {
        nome: "Alejandro",
        nacionalidade: "Espanhol" ,
        idade: 37
    },

]

function calculaNacionalidades(arr){
    let nacionalidades = {}
    for(let i = 0; i < arr.length; i++){
        const { nacionalidade } = arr[i];
        if(nacionalidades[nacionalidade] == undefined) {
            nacionalidades[nacionalidade] = 0;
        }
        nacionalidades[nacionalidade]++
    }
    return nacionalidades
}

function verificaIdade(arr){
    let crianca = [];
    let adolescente = [];
    let adulto = [];
    let idoso = [];
    for(let i = 0; i < arr.length; i++){
        const { idade,nome } = arr[i];
        if(idade <= 12){
            crianca.push(nome);
        }else if(idade <= 19){
            adolescente.push(nome)
        }else if(idade <= 60){
            adulto.push(nome);
        }else{
            idoso.push(nome);
        }

    }
    return "Crianças: " + crianca + "\n" + "Adolescentes: " + adolescente + "\n" + "Adultos: " + adulto + "\n" + "Idosos: " + idoso;
}



console.log(calculaNacionalidades(people))
console.log(verificaIdade(people))
