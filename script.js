function iniciar() {
  const quantidade = parseInt(document.getElementById("quantidade").value);
  const container = document.getElementById("inputs-container");
  const etapa2 = document.getElementById("etapa2");

  container.innerHTML = ""; // Limpa inputs anteriores

  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Digite um número válido maior que 0.");
    return;
  }

  // Cria os inputs
  for (let i = 1; i <= quantidade; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.step = "any";
    input.required = true;
    input.placeholder = `Número ${i}`;
    container.appendChild(input);
  }

  etapa2.style.display = "block";
}

function calcularMedia(event) {
  event.preventDefault(); // Impede o recarregamento da página

  const inputs = document.querySelectorAll("#inputs-container input");
  let soma = 0;

  inputs.forEach(input => {
    soma += parseFloat(input.value);
  });

  const media = soma / inputs.length;
  document.getElementById("resultado").innerText = `A média é: ${media.toFixed(2)}`;
}
