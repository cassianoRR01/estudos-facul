const btnNome = document.getElementById("btnNome");

btnNome.addEventListener("click", function() {
    const nome = document.getElementById("nome").value;

    document.cookie = `nome=${nome}; path=/`;
});

function pegarCookie(nome) {
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        cookie = cookie.trim();

        if (cookie.startsWith(nome + "=")) {
            return cookie.substring(nome.length + 1)
        };
    };

    return null
};

window.addEventListener("load", function() {
    
    const nome = pegarCookie("nome");

    if (nome !== null) {
        document.getElementById("nome").value = nome;
    }
});
