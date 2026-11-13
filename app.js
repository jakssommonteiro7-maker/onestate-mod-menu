function abrirMenu() {
  alert("Bem-vindo ao nosso menu OneState!");
}

abrirMenu();
function abrirMenu() {
  const menu = document.createElement("div");

  menu.innerHTML = `
    <h2>🔥 ONESTATE MENU</h2>
    <button onclick="mostrarOuro()">🪙 OURO</button>
    <p id="ouro">Ouro de demonstração: 0</p>
  `;

  document.body.appendChild(menu);
}

function mostrarOuro() {
  document.getElementById("ouro").innerText =
    "Ouro de demonstração: 1000";
}

abrirMenu();
