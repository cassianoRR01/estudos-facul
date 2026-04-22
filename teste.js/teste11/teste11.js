let botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    let lista = document.getElementById("lista");
    let nome = document.getElementById("add").value;
    
    let li = document.createElement("li");

    li.innerText = nome;
    lista.appendChild(li);
});
