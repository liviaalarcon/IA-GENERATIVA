let chamados = [];

function mostrarTela(tela) {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("formulario").classList.add("hidden");
  document.getElementById("dashboard").classList.add("hidden");

  document.getElementById(tela).classList.remove("hidden");

  if (tela === "dashboard") {
    atualizarDashboard();
  }
}

function voltar() {
  document.getElementById("menu").classList.remove("hidden");
  document.getElementById("formulario").classList.add("hidden");
  document.getElementById("dashboard").classList.add("hidden");
}

function criarChamado() {
  let maquina = document.getElementById("maquina").value;
  let gravidade = document.getElementById("gravidade").value;
  let data = document.getElementById("data").value;
  let setor = document.getElementById("setor").value;

  if (!maquina || !gravidade) {
    alert("Preencha todos os campos!");
    return;
  }

  let chamado = {
    maquina,
    gravidade,
    data,
    setor,
    status: "Parada"
  };

  chamados.push(chamado);

  alert("Chamado registrado com sucesso!");

  document.getElementById("maquina").value = "";
  document.getElementById("gravidade").value = "";
  document.getElementById("data").value = "";
  document.getElementById("setor").value = "";
}

function atualizarDashboard() {
  let lista = document.getElementById("listaChamados");
  lista.innerHTML = "";

  chamados.forEach((c, index) => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <p><strong>Máquina:</strong> ${c.maquina}</p>
      <p><strong>Gravidade:</strong> ${c.gravidade}</p>
      <p><strong>Data:</strong> ${c.data}</p>
      <p><strong>Setor:</strong> ${c.setor}</p>
      <p><strong>Status:</strong> ${c.status}</p>
      <button onclick="iniciarReparo(${index})">Iniciar Reparo</button>
      <button onclick="finalizar(${index})">Finalizar</button>
    `;

    lista.appendChild(card);
  });
}

function iniciarReparo(index) {
  chamados[index].status = "Em Reparo";
  atualizarDashboard();
}

function finalizar(index) {
  chamados[index].status = "Finalizado";
  atualizarDashboard();
}