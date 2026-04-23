
let botao = document.getElementById("calcular");

botao.addEventListener("click", function() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let media = (nota1 + nota2) / 2;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `Média: ${media}`;
});




