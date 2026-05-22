let alunos = [];
let notas = [];
let mediaTurma = [];

while (true) {
    let nome = prompt("Nome do aluno (ou digite sair para encerrar): ");

    if (nome.toLowerCase() === "sair") {
        console.log("Programa encerrado.") 
        break;
    }

    let nota1 = Number(prompt("Primeiro nota: "));
    let nota2 = Number(prompt("Segunda nota: "));

    alunos.push(nome);
    notas.push(nota1);
    notas.push(nota2);

    for (nota of notas) {
        nota += nota;
    };

    let media = (nota1 + nota2) / 2;

    mediaTurma.push(media);
    let mediaTotal = 0.0;

    for (let media of mediaTurma) {
        mediaTotal += media;
    }

    let mediaFinal = mediaTotal / mediaTurma.length;

    let maiorNota = Number(Math.max(...notas));
    let menorNota = Number(Math.min(...notas));

    console.log(`Media da turma: ${mediaFinal.toFixed(1)} 
        \nMaior nota: ${maiorNota} 
        \nMenor nota: ${menorNota}`)

};