//Algoritmo de Cadastro de Peças (SENAI - UC08) 
//Aluno: Fabiano Oliveira Santos


//Criar lista de arrays de peças
const listaPecas = ["Vela", "Parafuso", "Pistao"];
const pesoPecas =[20, 30, 45]

console.log("A lista de peças são estas: ", listaPecas);

//Condicional para checar limite máximo de 10 itens na array
if(listaPecas.length >= 10){
    console.log("Limite máximo de 10 peças atingido.")
}else{

    for(var i = 0; i < listaPecas.length; i++){
        console.log("Item: "+listaPecas[i]+" Cadastrado");
        console.log("---------------------");
    }


//Condicional para checar o limite por peça (100g)

for(var i = 0; i < listaPecas.length; i++){
    console.log("A peça: "+listaPecas[i]+", possui um peço de aproximadamente: "+pesoPecas[i]+"g");
    console.log("---------------------");
    if(pesoPecas[i] > 100){
        console.log("Esta peça possuí mais de 100g. Cadastro cancelado!")
        break;
    }
    }


//Condicional para checar quantidade de caracteres no nome das pecas (Mínimo 3)
for(var i = 0; i < listaPecas.length; i++){
    if(listaPecas[i].length < 3){
        console.log("A peça "+listaPecas[i]+", possui apenas 3 caracteres. Cadastro cancelado!")
        break
    }else{
        console.log("A peça "+listaPecas[i]+", possui mais de 3 caracteres. Cadastrado com sucesso.")
        console.log("------------------------------------------------------------------------------");
    }
}
}