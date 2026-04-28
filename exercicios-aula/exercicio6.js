let botao = document.getElementById("botao");

botao.addEventListener("click", function () {
    event.preventDefault();

    let matricula = document.getElementById("matricula").value;
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;

    let saida = document.getElementById("saida");

    saida.innerHTML = `Matricula: ${matricula} <br> Nome: ${nome} <br> Data de Nascimento: ${data}`;
});
