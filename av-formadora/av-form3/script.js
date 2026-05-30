let tarefas = JSON.parse(localStorage.getItem("listaTarefas")) || [];

let textoProg = document.getElementById("textoProg");
let circuloProg = document.getElementById("circuloProg");

mostrarTarefas();


$("#botao").click(function(event) {

    event.preventDefault();

    let addTarefa = $("#addTarefa").val();

    if (addTarefa.trim() === "") {
        return;
    }

    tarefas.push({
        texto: addTarefa,
        concluida: false
    });

    localStorage.setItem("listaTarefas", JSON.stringify(tarefas));

    mostrarTarefas();

    $("#addTarefa").val("");
});

function mostrarTarefas() {

    $("#tarefa").html("");

    tarefas.forEach((item, index) => {

        $("#tarefa").append(`
            <div class="tarefaStl ${item.concluida ? "verde" : ""}">
                <p>
                    <input type="checkbox" class="check" data-index="${index}" ${item.concluida ? "checked" : ""}>

                    <span class="textoTarefa ${item.concluida ? "riscado" : ""}">${item.texto}</span>

                    <span class="lixeira material-symbols-outlined"
                    data-index="${index}">delete</span>
                </p>
            </div>
        `);
    });

    progresso();

};

$(document).on("click", ".lixeira", function() {

    let indice = $(this).data("index");

    tarefas.splice(indice, 1);

    localStorage.setItem("listaTarefas",JSON.stringify(tarefas));

    mostrarTarefas();

});

$(document).on("change", ".check", function() {

    let indice = $(this).data("index");

    tarefas[indice].concluida = $(this).prop("checked");

    localStorage.setItem("listaTarefas",JSON.stringify(tarefas));

    mostrarTarefas();
    
});




function progresso() {
    
    if (tarefas.length === 0) {

        textoProg.innerText = "0%";

        circuloProg.style.background =`conic-gradient(#7c3aed 0%, rgb(27, 27, 65) 0%)`;

        return;
    };

    let completo = tarefas.filter(tarefa => tarefa.concluida).length;

    let porcentagem = Math.round((completo / tarefas.length) * 100);

    textoProg.innerText = `${porcentagem}%`;

    circuloProg.style.background =`conic-gradient(rgb(63, 63, 226) ${porcentagem}%,rgb(27, 27, 65) ${porcentagem}%)`;

};

function verificarTarefasPendentes() {

    let pendentes = tarefas.filter(tarefa => !tarefa.concluida);

    if (pendentes.length > 0) {
        alert(`Você possui ${pendentes.length} tarefa(s) pendente(s)!`);
    }

}

setInterval(verificarTarefasPendentes, 5000);