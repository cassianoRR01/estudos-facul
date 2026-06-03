const button = document.getElementById("toggleDark");

// carregar preferência
if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
    button.textContent = "☀️";
}

// clique
button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    // trocar ícone
    button.textContent = isDark ? "☀️" : "🌙";

    // salvar
    localStorage.setItem("dark-mode", isDark);
});