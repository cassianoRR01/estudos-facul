function parOuImpar(numero) {
    numero = Number(numero);

    if (isNaN(numero)) {
        return "Valor inválido.";
    }

    if (numero % 2 === 0) {
        return "Número par.";
    } else {
        return "Número ímpar.";
    }
};

console.log(parOuImpar(28));

