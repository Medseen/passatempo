alert("Bem vindo ao jogo da média");
let qtdNum = parseInt(prompt("Quantos números para calcular a média?"));
let soma = 0;

for (let i = 1; i <= qtdNum; i++) {
  let num = parseInt(prompt(`Digite o ${i}º número:`));
  soma += num;
}

let media = soma / qtdNum;
alert(`A média dos ${qtdNum} números é igual a ${media}`);