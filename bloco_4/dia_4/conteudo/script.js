//Conteudo de Objetos;

let player = {
    name: "Marta",
    lastaName: "Silva",
    age: 34,
    vitoria: [2006,2007,2008,2009,2010,2018],
    medalas: {
        golden: 2,
        silver: 3
    }
};

console.log("A jogadora " + player.name + " " + player.lastaName + " tem " + player.age + " anos de idade");

console.log(player);


console.log(player.vitoria.length);

//A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
console.log("A jogadora " + player["name"] + " "+ player["lastaName"] + " foi eleita a melhor do mundo por " + player.vitoria.length + " vezes." );

//Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log("A jogadora possui " + player.medalas.golden + " medalhas de ouro e " + player.medalas.silver + " medalhas de prata");