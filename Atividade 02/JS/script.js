console.log("Landing Page SENAI Jaú carregada com sucesso!");

const cursos = [
  "Desenvolvimento de Sistemas",
  "Mecânica de Usinagem",
  "Eletroeletrônica",
  "Calçados"
];

console.log("\nCursos disponíveis:\n");

cursos.forEach((curso) => {
  console.log(`- ${curso}`);
});

// Botão de matrícula
const botoes = document.querySelectorAll(".btn-primary");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    alert("Obrigado pelo interesse nos cursos do SENAI Jaú!");
  });
});