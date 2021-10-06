//Algoritmo de Cadastro de Eventos (SENAI - UC08) 
//Aluno: Fabiano Oliveira Santos

//Aparentemente este algotimo não está funcionando no VS Code por causa da função prompt() para entrada de dados.
//Para contornar o problema, abra este código no navegador ou jogue o código no site: https://replit.com/languages/javascript
var dataAtual = new Date("DD/MM/YYYY");
var dataEvento = new Date("DD/MM/YYYY");

console.log("SISTEMA DE CADASTRO PARA EVENTOS")

var dataAtual = prompt("Digite a data atual (dd/mm/aaaa): ");
var dataEvento = prompt("Digite a data do evento (dd/mm/aaaa): ");

//Funciona apenas para dias aparentemente
if (dataAtual > dataEvento){
	console.log("Data inválida");
}else{
	console.log("Data válida");
	console.log("-------------");
	var nome = prompt("Digite seu nome: ");
	var idade = prompt("Digite sua idade: ");

	//Estrutura condicional para validar a idade
	if(idade < 18){
		console.log("Idade Inválida");
	}else{

		var palestrante_participante = prompt("Você é Palestrante ou Participante do evento? ");
		
		//Estrutura condicional para saber se é Participante ou Palestrante
		switch(palestrante_participante) {
            case "Palestrante"||"palestrante":
              console.log("Voce é um Palestrante!");
				var palestrante = palestrante_participante;
              break;
            case "Participante"||"participante":
              console.log("Voce é um Participante!");
				var participante = palestrante_participante;
              break;
          }

		var nomeEvento = prompt("Digite o nome do Evento: ");
		var totalPessoas = prompt("Digite o número total de pessoas no evento: ")

		//Estrutura condicional para validar a quantidade de pessoas no evento
		if(totalPessoas >=100){
			console.log("Não é possível cadastrar evento com mais de 100 pessoas");
		}else{
			console.log("Cadastro realizado com sucesso!");
			console.log("-------------------------------");

			//Estrutura condicional para definir na hora de imprimir o nome se este é participante ou palestrante
			if(palestrante = palestrante_participante){
				console.log("Nome do Palestrante: ", nome);
			}else{
				console.log("Nome do Participante: ", nome);
			}

			console.log("Idade: ", idade);
			console.log("Data do evento: ", dataEvento);
			console.log("Nome do evento: ", nomeEvento);
		}
	}
	
}
