const botaoMudarCorDoFundo = document.getElementById('botao-mudar-cor')
const botaoMudaACorDaLetra = document.getElementById('cor-da-letra')
const botaoQueAumentaOTamnhoDaLetra = document.getElementById('aumenta-tamanho')
const boatoQueMudaEspacoEntreLinhas = document.getElementById('espaco-entre-linhas')
const alteraAFonteDoTexto = document.getElementById('altera-fonte')

function mudarCorDoFundo() {
  let elementoPrincipal = document.getElementById('cor-do-fundo')
  elementoPrincipal.style.backgroundColor = "rgb(0, 255, 127)"
}

function mudaCorDaLetra() {
  let elementoP = document.getElementsByTagName('p')
  for(let index = 0; index < elementoP.length; index += 1){
    elementoP[index].style.color = "#9932CC"
  }
}

function aumentaOTamanhoDaLetra() {
  let elementoP = document.getElementsByTagName('p')
  for (let index = 0; index < elementoP.length; index += 1){
    elementoP[index].style.fontSize = "30px" 
  }
}

function alteraOEspacoDasLinhas() {
  let elementoP = document.getElementsByTagName('p')
  for (let index = 0; index < elementoP.length; index += 1){
    elementoP[index].style.lineHeight = "60px"
  }
}



botaoMudarCorDoFundo.addEventListener('click', mudarCorDoFundo)
botaoMudaACorDaLetra.addEventListener('click', mudaCorDaLetra)
botaoQueAumentaOTamnhoDaLetra.addEventListener('click', aumentaOTamanhoDaLetra)
boatoQueMudaEspacoEntreLinhas.addEventListener('click', alteraOEspacoDasLinhas)



