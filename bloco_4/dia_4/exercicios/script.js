//Exercicios - Objetos e for/in

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
//Valor esperado no console: Bem-vinda, Margarida

console.log("Bem-vinda, " + info.personagem);

//Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info["recorrente"] = "Sim";

console.log(info);

//Faça um for/in que mostre todas as chaves do objeto.

for(let index in info) {
    console.log(info[index]);
}

/*
Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
*/

let infoTwo = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: "Sim",
  };

  console.log(info.personagem + " " +infoTwo.personagem);
  console.log(info.origem + " " + infoTwo.origem);
  console.log(info.nota + " " +  infoTwo.nota);

  if(info["recorrente"] === infoTwo["recorrente"]) {
      console.log("Ambos recorrendes")
  } else {
      console.log(info["recorrente"] + ' ' + infoTwo["recorrente"] );
  }

  //Exercicio de Função
  //Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.