const btnNome = document.getElementById("btnNome");

btnNome.addEventListener("click", function() {
    const nome = document.getElementById("nome").value;

    document.cookie = `nome=${nome}; path=/`
});

const btnMostrarCookie = document.getElementById("btnMostrarCookie");






