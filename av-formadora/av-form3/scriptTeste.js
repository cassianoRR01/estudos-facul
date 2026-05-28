// ==========================================
// LISTA DE TAREFAS COMPLETA EM JAVASCRIPT
// ==========================================

// ---------- ELEMENTOS ----------
const taskInput = document.getElementById("taskInput")
const addButton = document.getElementById("addButton")
const taskList = document.getElementById("taskList")
const progressText = document.getElementById("progressText")
const progressCircle = document.getElementById("progressCircle")

// ---------- ARRAY DAS TAREFAS ----------
let tasks = []

// ---------- ADICIONAR TAREFA ----------
function addTask() {
  const text = taskInput.value.trim()

  if (text === "") return

  const task = {
    id: Date.now(),
    text: text,
    done: false
  }

  tasks.push(task)

  taskInput.value = ""

  renderTasks()
  updateProgress()
}

// ---------- MARCAR COMO FEITO ----------
function toggleTask(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      return {
        ...task,
        done: !task.done
      }
    }

    return task
  })

  renderTasks()
  updateProgress()
}

// ---------- DELETAR ----------
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id)

  renderTasks()
  updateProgress()
}

// ---------- MOSTRAR TAREFAS NA TELA ----------
function renderTasks() {
  taskList.innerHTML = ""

  tasks.forEach(task => {

    const div = document.createElement("div")
    div.className = "task"

    div.innerHTML = `
      <div class="left">
        <button class="check ${task.done ? "done" : ""}">
          ${task.done ? "✓" : ""}
        </button>

        <span class="${task.done ? "completed" : ""}">
          ${task.text}
        </span>
      </div>

      <button class="delete">
        🗑
      </button>
    `

    // botão check
    div.querySelector(".check")
      .addEventListener("click", () => {
        toggleTask(task.id)
      })

    // botão delete
    div.querySelector(".delete")
      .addEventListener("click", () => {
        deleteTask(task.id)
      })

    taskList.appendChild(div)
  })
}

// ---------- PORCENTAGEM ----------
function updateProgress() {

  if (tasks.length === 0) {
    progressText.innerText = "0%"
    progressCircle.style.background =
      `conic-gradient(#7c3aed 0%, #1e293b 0%)`
    return
  }

  const completed = tasks.filter(task => task.done).length

  const percent = Math.round(
    (completed / tasks.length) * 100
  )

  progressText.innerText = `${percent}%`

  progressCircle.style.background =
    `conic-gradient(
      #7c3aed ${percent}%,
      #1e293b ${percent}%
    )`
}

// ---------- BOTÃO ADICIONAR ----------
addButton.addEventListener("click", addTask)

// ---------- ENTER ----------
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask()
  }
})