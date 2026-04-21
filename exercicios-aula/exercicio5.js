let nota1 = Number(prompt("Insira a primeira nota: "));
let nota2 = Number(prompt("Insira a segunda nota: "));
let media = (nota1 + nota2) / 2;


if (isNaN(nota1) || isNaN(nota2) || 0 > nota1 < 10 || 0 > nota2 < 10) {
    console.log("Nota inválida.");
} else if (media >= 6) {
    for (let i = 0; i < 3; i++) {
        console.log(`Media: ${media.toFixed(2)} - Aprovado.`);
    }
} else if (media >= 4) {
    for (let i = 0; i < 3; i++) {
        console.log(`Media: ${media.toFixed(2)} - Em recuperação.`);
    }
} else {
    for (let i = 0; i < 3; i++) {
        console.log(`Media: ${media.toFixed(2)} - Reprovado.`);
    }
}



