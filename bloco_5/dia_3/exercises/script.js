function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//Exercicio 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const elementoDays = document.getElementById('days')

function criarListaDeDias() {
  for(let index = 0; index < dezDaysList.length; index += 1) {
    let criarElementoLi = document.createElement('li')
    elementoDays.appendChild(criarElementoLi)
    criarElementoLi.classList.add('day')
    criarElementoLi.innerText = dezDaysList[index]
    if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
      criarElementoLi.classList.add('holiday')
    } 
    if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25){
      criarElementoLi.classList.add("friday")
    }
  }
}

criarListaDeDias()

function criarFeriados() {

}

//Exercicio 2
function criarBotao() {
  let DivClassBoton = document.getElementsByClassName('buttons-container')[0]
  let criarbotoaoFilho = document.createElement('button')
  DivClassBoton.appendChild(criarbotoaoFilho)
  criarbotoaoFilho.id = "btn-holiday"
  criarbotoaoFilho.innerHTML = "Feriado"
}

criarBotao()
//Exercicio 3

const botao = document.getElementById("btn-holiday")

botao.addEventListener('click', clicarDoBotaoFeriado) 

function clicarDoBotaoFeriado() {
  let feriados = document.getElementsByClassName('holiday')
  for(let index = 0; index < feriados.length ; index += 1){
    feriados[index].style.backgroundColor = "#7CFC00"
    
  } 
}

//Exercicio 4

function criarBotaoDois() {
  let DivClassBoton = document.getElementsByClassName('buttons-container')[0]
  let criarbotoaoFilho = document.createElement('button')
  DivClassBoton.appendChild(criarbotoaoFilho)
  criarbotoaoFilho.id = "btn-friday"
  criarbotoaoFilho.innerHTML = "Sexta-Feira"
}

criarBotaoDois()



