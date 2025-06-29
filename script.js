// Verifica se deve mostrar o aviso
window.onload = () => {
  if (!localStorage.getItem("naoMostrarAviso")) {
    document.getElementById("modal").style.display = "flex";
  }
};

function fecharModal() {
  const naoMostrar = document.getElementById("naoMostrar").checked;
  if (naoMostrar) {
    localStorage.setItem("naoMostrarAviso", "true");
  }
  document.getElementById("modal").style.display = "none";
}

function iniciar() {
  const quantidade = parseInt(document.getElementById("quantidade").value);
  const container = document.getElementById("inputs-container");
  const etapa2 = document.getElementById("etapa2");

  container.innerHTML = "";
  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Informe uma quantidade válida.");
    return;
  }

  for (let i = 1; i <= quantidade; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.required = true;
    input.placeholder = `Número ${i}`;
    container.appendChild(input);
  }

  etapa2.style.display = "block";
}

function calcularMedia(event) {
  event.preventDefault();
  const inputs = document.querySelectorAll("#inputs-container input");
  let soma = 0;
  inputs.forEach(input => {
    soma += parseFloat(input.value);
  });

  const media = soma / inputs.length;
  document.getElementById("resultado").innerText = `A média é: ${media.toFixed(2)}`;
}
