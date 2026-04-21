function calcMedia(nota1, nota2) {
    nota1 = Number(nota1);
    nota2 = Number(nota2);
    let media = (nota1 + nota2) / 2;

    if (isNaN(nota1) || isNaN(nota2) || 0 > nota1|| nota1 > 10 || 0 > nota2 || nota2 > 10) {
        return "Nota inválida.";
    } else if (media >= 6) {
        for (let i = 0; i < 3; i++) {
            return `Media: ${media.toFixed(2)} - Aprovado.`;
        }
    } else if (media >= 4) {
        for (let i = 0; i < 3; i++) {
            return `Media: ${media.toFixed(2)} - Em recuperação.`;
        }
    } else {
        for (let i = 0; i < 3; i++) {
            return `Media: ${media.toFixed(2)} - Reprovado.`;
        }
    }
}

console.log(calcMedia(4,6))