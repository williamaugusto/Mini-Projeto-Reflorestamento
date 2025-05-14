const registrosReflorestamento = [
  { usuario: "Carlos", tipoArvore: "Ipê Amarelo", data: "2025-03-20", quantidade: 5 },
  { usuario: "Ana", tipoArvore: "Araucária", data: "2025-04-02", quantidade: 3 },
  { usuario: "Carlos", tipoArvore: "Araucária", data: "2025-04-10", quantidade: 4 },
  { usuario: "Julia", tipoArvore: "Pau-Brasil", data: "2025-05-01", quantidade: 6 },
  { usuario: "Ana", tipoArvore: "Ipê Amarelo", data: "2025-05-03", quantidade: 2 }
];

function buscar() {
  const usuarioInput = document.getElementById('usuario').value.toLowerCase();
  const tipoArvoreInput = document.getElementById('tipoArvore').value.toLowerCase();

  const resultados = registrosReflorestamento.filter(reg => {
    const usuarioMatch = !usuarioInput || reg.usuario.toLowerCase().includes(usuarioInput);
    const arvoreMatch = !tipoArvoreInput || reg.tipoArvore.toLowerCase().includes(tipoArvoreInput);
    return usuarioMatch && arvoreMatch;
  });

  const tbody = document.getElementById('tabelaResultados').querySelector('tbody');
  tbody.innerHTML = "";

  if (resultados.length === 0) {
    tbody.innerHTML = "<tr><td colspan='4'>Nenhum registro encontrado.</td></tr>";
    return;
  }

  resultados.forEach(reg => {
    const row = `<tr>
      <td>${reg.usuario}</td>
      <td>${reg.tipoArvore}</td>
      <td>${reg.data}</td>
      <td>${reg.quantidade}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}
