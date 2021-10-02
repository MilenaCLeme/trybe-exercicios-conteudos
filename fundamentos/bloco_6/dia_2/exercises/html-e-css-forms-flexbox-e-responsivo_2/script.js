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

documento.getElementById('data-1').DatePickerX.init();

document.getElementById('data-1').DatePickerX.getMinDate()