// Definindo um objeto de usuário fake para testar

const usuarioString = localStorage.getItem("usuario");
const usuariocomp = JSON.parse(usuarioString);


const registroPlantioString = localStorage.getItem("registroPlantio");
const registroPlantiocomp = JSON.parse(registroPlantioString);

	
const usuario = {
	
    nome: usuariocomp.usuario,
    bio: "Apaixonado por natureza e comprometido com o reflorestamento.",
    arvoreEscolhida: usuariocomp.arvore, // Pode ser "pau-brasil", "castanheira", ou "peroba-rosa"
    quantidadePlantada: registroPlantiocomp.quantidade // Número de árvores plantadas (fake para testar)
};

// Função para atualizar o perfil do usuário
function atualizarPerfil() {
    document.getElementById("nomeUsuario").textContent = usuario.nome;
    document.getElementById("bioTexto").textContent = usuario.bio;

    // Exibindo o avatar da árvore
    const avatarImagem = document.getElementById("avatarImagem");
    let avatarSrc = "";

    if (usuario.arvoreEscolhida === "pau-brasil") {
        if (usuario.quantidadePlantada < 100) avatarSrc = "img/paubrasil_broto.jpeg";
        else if (usuario.quantidadePlantada < 300) avatarSrc = "img/paubrasil_jovem.jpeg";
        else if (usuario.quantidadePlantada < 700) avatarSrc = "img/paubrasil_madura.jpeg";
        else avatarSrc = "img/paubrasil_madura.jpeg"; // 1500+
    } else if (usuario.arvoreEscolhida === "castanheira") {
        if (usuario.quantidadePlantada < 100) avatarSrc = "img/castanheira_broto.png";
        else if (usuario.quantidadePlantada < 300) avatarSrc = "img/castanheira_jovem.png";
        else if (usuario.quantidadePlantada < 700) avatarSrc = "img/castanheira_madura.png";
        else avatarSrc = "img/castanheira_madura.png"; // 1500+
    } else if (usuario.arvoreEscolhida === "peroba-rosa") {
        if (usuario.quantidadePlantada < 100) avatarSrc = "img/perobrosa_broto.png";
        else if (usuario.quantidadePlantada < 300) avatarSrc = "img/perobrosa_jovem.png";
        else if (usuario.quantidadePlantada < 700) avatarSrc = "img/perobrosa_madura.png";
        else avatarSrc = "img/perobrosa_madura.png"; // 1500+
    }
    avatarImagem.src = avatarSrc;

    // Exibindo a quantidade de árvores plantadas
    document.getElementById("quantidadePlantada").textContent = `Árvores Plantadas: ${usuario.quantidadePlantada}`;
}

// Atualiza o perfil ao carregar a página
atualizarPerfil();

// Função para editar a bio
document.getElementById("editarBioBtn").addEventListener("click", function() {
    const novaBio = prompt("Digite sua nova bio:", usuario.bio);
    if (novaBio && novaBio !== usuario.bio) {
        usuario.bio = novaBio;
        atualizarPerfil();
    }
});
