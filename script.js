alert('Seja bem-vindo ao nosso jogo da média!');

let quantidade = parseInt(prompt('Quantos números você deseja inserir?'));
let soma = 0;

for (let i = 1; i <= quantidade; i++) {
  let numero = parseFloat(prompt(`Digite o ${i}º número:`));
  soma += numero;
}

let media = soma / quantidade;
alert(`A média dos ${quantidade} números inseridos é: ${media}`);
