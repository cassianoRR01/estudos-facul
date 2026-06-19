document.addEventListener('DOMContentLoaded', function() {
    const visor = document.getElementById('visor');
    const botoes = document.querySelectorAll('.botoes button');
    
    let expressaoAtual = '';
    botoes.forEach(function(botao) {
        botao.addEventListener('click', function() {
            const valor = botao.textContent;
            if (valor === 'C') {
                expressaoAtual = '';
                visor.value = '';
            } 
            else if (valor === '=') {
                try {
                    expressaoAtual = eval(expressaoAtual).toString();
                    visor.value = expressaoAtual;
                } catch (erro) {
                    visor.value = 'Erro';
                    expressaoAtual = '';
                }
            } 
            else {
                expressaoAtual += valor;
                visor.value = expressaoAtual;
            }
        });
    });
});