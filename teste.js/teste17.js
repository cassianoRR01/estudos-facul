document.cookie = "nome=Cassiano";
document.cookie = "idade=24";
document.cookie = "curso=ADS";

function pegarCookie(nome) {
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        cookie = cookie.trim();

        if (cookie.startsWith(nome + "=")) {
            return cookie.substring(nome.length + 1)
        }
    }

    return null;

};

console.log(pegarCookie("nome"));