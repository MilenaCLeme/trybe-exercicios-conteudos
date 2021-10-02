const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.

//Primeira Função adicionar a classe tech em apenas um elemento selecionado 

function clicou(){
  divUm.addEventListener('click', adicionarClasse)
  divDois.addEventListener('click', adicionarClasse)
  divTres.addEventListener('click', adicionarClasse)
}

function adicionarClasse(event) {
  let elementoClasse = document.querySelector('.tech')
  elementoClasse.classList.remove('tech')
  event.target.classList.add('tech')
}

clicou()

//segunda atividade, quanto clicar do enviar, envia o texto para o tech 

const botao = document.getElementById('subtimi')

botao.addEventListener('click', clicarDoBotaoAlteraTexto)

function clicarDoBotaoAlteraTexto() {
  let elementoDoTexto = document.getElementById('input')
  let captura = elementoDoTexto.value
  let elementoClasse = document.querySelector('.tech')
  elementoClasse.innerHTML = captura
}

//Abri uma pagina , Seguindo o exemplo do profile 

myWebpage.addEventListener('dblclick', abrirUmPagina)

function abrirUmPagina() {
  window.open("https://github.com/MilenaCLeme")
}

myWebpage.addEventListener('mouseover', mudarDeCor)

function mudarDeCor() {
  myWebpage.style.color = "red"
}
