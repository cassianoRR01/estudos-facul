let precos = [150.50, 2300.00, 450.20, 119.90, 890.00];
let maiorPreco = Math.max(...precos);
let menorPreco = Math.min(...precos);

function soma() {
    let soma = 0;

    for (let preco of precos) {
        soma = soma + preco;
    }

    return soma;
}

let media = soma() / precos.length;

console.log(`Maior venda do dia: ${maiorPreco} \nMenor venda do dia: ${menorPreco} \nFaturamento total: ${soma()} \nMedia dos valores: ${media}`);