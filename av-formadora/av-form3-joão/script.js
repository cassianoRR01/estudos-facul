let btnAdicionar = document.getElementById("btnAdicionar");
let inputTarefa = document.getElementById("tarefa");
let lista = document.getElementById("lista");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

mostrarTarefas();

btnAdicionar.addEventListener("click", adicionarTarefa);

function adicionarTarefa() {

    let texto = inputTarefa.value.trim();

    if (texto === "") {
        return;
    };

    tarefas.push({
        texto: texto,
        concluida: false
    });

    salvarTarefas();

    mostrarTarefas();

    inputTarefa.value = "";
};

function mostrarTarefas() {

    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            <div>

                <input type="checkbox" class="check" data-index="${index}" ${tarefa.concluida ? "checked" : ""}>

                <span class=" ${tarefa.concluida ? "concluida" : ""}">
                    ${tarefa.texto}
                </span>

            </div>

            <button class="remover" data-index="${index}"> X </button>
        `;

        lista.appendChild(li);
    });

    adicionarEventos();
}

function adicionarEventos() {

    let checkboxes = document.querySelectorAll(".check");

    checkboxes.forEach(check => {

        check.addEventListener("change", function() {

            let indice = this.dataset.index;

            tarefas[indice].concluida = this.checked;

            salvarTarefas();

            mostrarTarefas();
        });

    });

    let botoesRemover = document.querySelectorAll(".remover");

    botoesRemover.forEach(botao => {

        botao.addEventListener("click", function() {

            let indice = this.dataset.index;

            tarefas.splice(indice, 1);

            salvarTarefas();

            mostrarTarefas();
        });

    });

};

function salvarTarefas() {

    localStorage.setItem("tarefas",JSON.stringify(tarefas));

};

function verificarTarefasPendentes() {

    let pendentes = tarefas.filter(tarefa => !tarefa.concluida);

    if (pendentes.length > 0) {
        alert(`Você possui ${pendentes.length} tarefa(s) pendente(s)!`);
    };

};

setInterval(verificarTarefasPendentes, 5000);