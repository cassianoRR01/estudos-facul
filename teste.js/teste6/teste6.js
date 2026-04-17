function verificar() {
    let nome = document.getElementById("inome").value
    let idade = document.getElementById("iidade").value
    let sexo = document.getElementById("isexo").value

    let resultado = maioridade(nome, idade, sexo)

    document.getElementById("iresultado").innerText = resultado
}

function maioridade(nome, idade, sexo) {
    sexo = sexo.toLowerCase()
    idade = Number(idade)

    if (isNaN(idade)) {
        return "Idade inválida."
    }

    let genero 

    if (sexo === "masculino") {
        genero = "um homem"
    } else if (sexo === "feminino") {
        genero = "uma mulher"
    } else if (sexo === "outro") {
        genero = "uma pessoa"
    } else {
        return "Sexo inválido."
    }

    let status

    if (idade >= 18) {
        status = "maior de idade."
    } else {
        status = "menor de idade."
    }
    
    return `${nome}, você é ${genero} ${status}`
}