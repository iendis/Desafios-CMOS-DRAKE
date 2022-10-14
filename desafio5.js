let alunos = ["Pedro","Julio","Marcos","Lucas","Kayo","Leonardo"];
let aluno = [];
let size = alunos.length;

for( let i = 0; i < size ; i++){
    let element = alunos.splice(Math.random() * alunos.length ,1)[0]; // pega um elemento aleatorio do array e remove
    aluno.splice(0, 0, element); // adiciona os elementos no array
    
}

console.log(aluno);