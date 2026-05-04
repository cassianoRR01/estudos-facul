let botao = document.getElementById("botao");

botao.addEventListener("click", function(event) {
    document.body.style.backgroundColor = "lightgray";
});

let formBut = document.getElementById("formBut");

formBut.addEventListener("click", function() {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    
    let formDados = document.getElementById("formDados");

    formDados.innerHTML = `Nome: ${nome} <br> Idade: ${idade}`;
});