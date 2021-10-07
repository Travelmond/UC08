//Algoritmo de Sistema de contagem de alunos (SENAI - UC08) 
//Aluno: Fabiano Oliveira Santos

const numeroAlunos = [1,2,3,4,5,6,7,8,9,10];

//// Utilizando com a estrutura de loop FOR
console.log("Esta parte do algoritmo está sendo executado com uma estrutura de Loop FOR.");
console.log("---------------------");
for(let i = 0; i < numeroAlunos.length; i++){
    if(numeroAlunos[i] == 0){
        console.log("O numero inserido é ZERO.")
        break;
    }else if(numeroAlunos[i] % 2 == 0){
        console.log("O número "+numeroAlunos[i]+" é PAR.");
    }else{
        console.log("O número "+numeroAlunos[i]+" é ÍMPAR.");
    }

}

console.log("---------------------");
console.log("Esta parte do algoritmo está sendo executado com uma estrutura de Loop WHILE.");
console.log("---------------------");
let i = 0;
while (i < numeroAlunos.length){
    if(numeroAlunos[i] == 0){
        console.log("O número atual é ZERO.");
    }else if(i % 2 != 0){
        console.log("O número "+numeroAlunos[i]+" é ÍMPAR.");
    }else{
        console.log("O número "+numeroAlunos[i]+" é PAR.");
    }
    i++;
}