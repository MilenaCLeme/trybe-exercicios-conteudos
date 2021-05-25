/* conteudo - parte 3
let base = 5;
let altura = 8;
let area = altura * base;
let perimetro = base + base + altura + altura;

console.log(area);
console.log(perimetro);
console.log(altura * base);
*/

/* conteudo - parte 4
let notaDaPessoaCandidata = 70;

if (notaDaPessoaCandidata <= 80 && notaDaPessoaCandidata >= 80) {
    console.log("Parabéns, você foi aprovada(o)!")
} 
else if (notaDaPessoaCandidata <= 80 && notaDaPessoaCandidata >= 60) {
    console.log("Você está na nossa lista de espera")
}
else { 
    console.log("Você foi reprovado(a)")
} 
*/

/* conteudo - parte 5*/
let mensagem = "lista";

switch (mensagem){
    case "aprovada":
      console.log("aprovada do processo seletivo");
      break;
    case "lista":
      console.log("está na lista");
      break;
    case "reprovada":
      console.log("não passou no processo seletivo");
      break;
    default:
      console.log("não se aplica")
}
