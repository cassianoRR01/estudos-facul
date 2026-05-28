let tarefas = JSON.parse(localStorage.getItem("listaTarefas")) || [];

mostrarTarefas();

$("#botao").click(function(event) {

    event.preventDefault();

    let addTarefa = $("#addTarefa").val();

    if (addTarefa.trim() === "") {
        return;
    }

    tarefas.push(addTarefa);

    localStorage.setItem("listaTarefas", JSON.stringify(tarefas));

    mostrarTarefas();

    $("#addTarefa").val("");
});

function mostrarTarefas() {

    $("#tarefa").html("");

    for (let item of tarefas) {

        $("#tarefa").append(`
            <div class="tarefaStl">
                <p>${item}</p>
            </div>
        `);
    }
}

