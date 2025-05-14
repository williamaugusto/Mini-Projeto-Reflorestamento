
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const arvore = document.querySelector("input[name='arvore']:checked").value;

    const userData = {
        nome,
        usuario,
        senha,
        arvore
    };

    localStorage.setItem("usuario", JSON.stringify(userData));
    setTheme(arvore);
    alert("Cadastro realizado com sucesso!");
});

function setTheme(arvore) {
    let cor = "#4CAF50";
    if (arvore === "pau-brasil") cor = "#b71c1c";
    else if (arvore === "castanheira") cor = "#4e342e";
    else if (arvore === "peroba-rosa") cor = "#ad1457";
    document.documentElement.style.setProperty("--cor-tema", cor);
}
