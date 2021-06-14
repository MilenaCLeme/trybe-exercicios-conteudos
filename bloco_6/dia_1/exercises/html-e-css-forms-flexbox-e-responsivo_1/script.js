const selection = document.getElementById('input-estado');

const estadosBR = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goías",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraíma",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
  }; 

criarOption()

function criarOption(){
  for(index in estadosBR) {
    let option = document.createElement('option')
    selection.appendChild(option)
    option.id = estadosBR[index]
    option.innerHTML = estadosBR[index]
    option.name = "estado"
  }
}

const data = document.getElementById('data')

criarAlerta()

function criarAlerta() {
  if(data.value < 0 ){
    alert("Data invalida!")
  }
}

const submit = document.getElementById('submit')


submit.addEventListener('click', function(event)
{
  var query = location.search.slice(1);
  var partes = query.split('&');
  var data = {};
  partes.forEach(function (parte) {
    var chaveValor = parte.split('=');
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    data[chave] = valor;
    console.log(data);
  });
})



