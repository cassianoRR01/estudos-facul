function maioridade(nome, idade, sexo) {
    sexo = sexo.toLowerCase()

    let genero 

    if (sexo === "masculino") {
        genero = "um homem"
    } else if (sexo === "feminino") {
        genero = "uma mulher"
    }else if (sexo === "outro"){
        genero = "uma pessoa"
    } else {
        return "Sexo inválido."
    }

    idade = Number(idade)

    if (isNaN(idade)) {
        return "Idade inválida."
    }

    let status

    if (idade >= 18) {
        status = "maior de idade."
    } else {
        status = "menor de idade."
    }
    
    return `${nome} você é ${genero} ${status}`
}

console.log(maioridade("Kleber", 30, "OUTRO"))
