let tarefas = [];

carregarCookie();
mostrarTarefas();

$("#btnAdicionar").click(function() {

    let texto = $("#tarefa").val();

    if(texto.trim() === "") {
        return;
    };

    tarefas.push({texto: texto, concluida: false});

    salvarCookie();
    mostrarTarefas();

    $("#tarefa").val("");

});

function mostrarTarefas() {

    $("#lista").html("");

    tarefas.forEach((tarefa,index) => {

        $("#lista").append(`

            <li>

                <div>

                    <input type="checkbox" class="check" data-index="${index}" 
                    ${tarefa.concluida ? "checked" : ""}>

                    <span class="${tarefa.concluida ? "concluida" : ""}">
                        ${tarefa.texto}
                    </span>

                </div>

                <button class="remover" data-index="${index}"> X </button>

            </li>

        `);

    });

}

$(document).on("change",".check",function() {

    let indice = $(this).data("index");

    tarefas[indice].concluida = $(this).prop("checked");

    salvarCookie();
    mostrarTarefas();

});

$(document).on("click",".remover",function() {

    let indice = $(this).data("index");

    tarefas.splice(indice,1);

    salvarCookie();

    mostrarTarefas();

});

function salvarCookie() {

    document.cookie = "tarefas=" + encodeURIComponent(JSON.stringify(tarefas)) + 
    ";max-age=604800";

};

function carregarCookie() {

    let cookie = document.cookie.split("; ").find(row => row.startsWith("tarefas="));

    if(cookie) {

        tarefas = JSON.parse(
            decodeURIComponent(
                cookie.split("=")[1]
            )
        );

    };

};

setTimeout(function() {

    alert("Lembre-se de concluir suas tarefas!");

},5000);

$.ajax({url:"https://jsonplaceholder.typicode.com/todos/1", method:"GET",success:function(resposta) {

        console.log("AJAX funcionando:",resposta);

    };

});