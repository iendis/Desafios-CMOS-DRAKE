let alunos = ["Pedro","Julio","Marcos","Lucas","Julio","Kayo"];

function randomName(items){
    let index = Math.floor(Math.random() * items.length);
    return items[index];
}

console.log(randomName(alunos))