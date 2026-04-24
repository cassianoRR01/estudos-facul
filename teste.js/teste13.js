let adicao = document.getElementById("adicao");
let subtracao = document.getElementById("subtracao");
let divisao = document.getElementById("divisao");
let multiplicacao = document.getElementById("multi");

adicao.addEventListener("click", function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let valor = num1 + num2;

    let resultado = document.getElementById("resultado");

    resultado.innerText = `${valor}`;
});
 
subtracao.addEventListener("click", function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let valor = num1 - num2;

    let resultado = document.getElementById("resultado");

    resultado.innerText = `${valor}`;
});

divisao.addEventListener("click", function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let valor = num1 / num2;

    let resultado = document.getElementById("resultado");

    resultado.innerText = `${valor}`;
});

multiplicacao.addEventListener("click", function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let valor = num1 * num2;

    let resultado = document.getElementById("resultado");

    resultado.innerText = `${valor}`;
});

