let botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    let saida = document.getElementById("saida");
    let data =  new Date();

    saida.innerText = data.toLocaleDateString();
});
