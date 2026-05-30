let tarefas = JSON.parse(localStorage.getItem("listaTarefas")) || [];

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
            <div class="tarefaStl">
                <p>
                    <input type="checkbox" class="check" data-index="${index}" ${item.concluida ? "checked" : ""}>

                    <span class="textoTarefa ${item.concluida ? "riscado" : ""}">${item.texto}</span>

                    <span class="lixeira material-symbols-outlined"
                    data-index="${index}">delete</span>
                </p>
            </div>
        `);
    });
}

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

