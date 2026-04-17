function verificaIdade(nome, idade) {
    if (isNaN(idade)) {
        console.log("Idade Invaálida.")
    } else if (idade >= 18) {
        console.log(`${nome}, você é maior de idade.`)
    } else {
        console.log(`${nome}, você é menor de idade.`)
    }
}

verificaIdade("Fabio", 15)

