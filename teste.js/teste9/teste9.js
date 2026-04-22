let form = document.getElementById("formulario");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    document.getElementById("resultado").innerText = `Nome: ${nome} \nIdade: ${idade}`;
})
