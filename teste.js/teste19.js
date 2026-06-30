const btnDark = document.getElementById("btnDark");

btnDark.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btnDark.innerText = "Escuro";

        document.cookie = "modoEscuro=Escuro; path=/";
    } else {
        btnDark.innerText = "Claro";

        document.cookie = "modoEscuro=Claro; path=/";
    };
});

function pegarCookie(nome) {

    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {

        cookie = cookie.trim();

        if (cookie.startsWith(nome + "=")) {
            return cookie.substring(nome.length + 1);
        }

    }

    return null;
}

window.addEventListener("load", () => {

    let modo = pegarCookie("modoEscuro")

    if (modo === "Escuro") {

        document.body.classList.add("dark")

        btnDark.innerText = "Escuro"

    } else {

        btnDark.innerText = "Claro"

    };
})



