const usuarios = [
  { nome: "Carlos Silva", avatar: "img/carlos.jpg", totalContribuicoes: 12 },
  { nome: "Ana Oliveira", avatar: "img/ana.jpg", totalContribuicoes: 18 },
  { nome: "Julia Lima", avatar: "img/julia.jpg", totalContribuicoes: 21 },
  { nome: "Rafael Costa", avatar: "img/rafael.jpg", totalContribuicoes: 9 },
  { nome: "Paulo Mendes", avatar: "img/paulo.jpg", totalContribuicoes: 6 }
];

// Ordenar por número de contribuições decrescente e pegar os 3 primeiros
const topUsuarios = usuarios
  .sort((a, b) => b.totalContribuicoes - a.totalContribuicoes)
  .slice(0, 3);

const container = document.getElementById('destaques-container');

topUsuarios.forEach(usuario => {
  const card = document.createElement('div');
  card.className = 'usuario';

  card.innerHTML = `
    <img src="${usuario.avatar}" alt="${usuario.nome}">
    <p>${usuario.nome}</p>
  `;

  container.appendChild(card);
});
