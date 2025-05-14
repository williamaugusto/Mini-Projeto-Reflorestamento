document.getElementById("plantioForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const quantidade = parseInt(document.getElementById("quantidade").value);
    const especie = document.getElementById("especie").value;
	const usuarioString = localStorage.getItem("usuario");
	const usuario = JSON.parse(usuarioString);


    const plantio = {
        usuario: usuario.usuario,
        quantidade: quantidade,
        especie: especie
    };

    localStorage.setItem("registroPlantio", JSON.stringify(plantio));

    document.getElementById("resultado").innerHTML = `
        <p><strong>Plantio cadastrado:</strong></p>
        <pre>${JSON.stringify(plantio, null, 2)}</pre>
    `;
});
