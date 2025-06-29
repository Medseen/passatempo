function jogar() {
  alert("Seja bem-vindo ao Jogo da Média!");
  
  let quantidade = parseInt(prompt("Quantos números você quer digitar?"));
  let soma = 0;

  for (let i = 1; i <= quantidade; i++) {
    let numero = parseFloat(prompt(`Digite o número ${i}:`));
    soma += numero;
  }

  let media = soma / quantidade;
  document.getElementById("resultado").innerText = `A média dos ${quantidade} números é: ${media.toFixed(2)}`;
}
