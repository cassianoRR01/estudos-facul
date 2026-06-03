
        // 3. Aplicar a máscara quando o documento estiver pronto
        $(document).ready(function(){
            $('#cpf').mask('000.000.000-00');
            $('#celular').mask('(00) 00000-0000');
            $('#cep').mask('00000-000');

        });



function validaCPF(cpf) {
	cpf = cpf.replace(/\D+/g, '');
	if (cpf.length !== 11) return false;

	let soma = 0;
	let resto;
	if (/^(\d)\1{10}$/.test(cpf)) return false;

	for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
	resto = (soma * 10) % 11;
	if ((resto === 10) || (resto === 11)) resto = 0;
	if (resto !== parseInt(cpf.substring(9, 10))) return false;

	soma = 0;
	for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
	resto = (soma * 10) % 11;
	if ((resto === 10) || (resto === 11)) resto = 0;
	if (resto !== parseInt(cpf.substring(10, 11))) return false;

	return true;
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('cpfForm').addEventListener('submit', function(e) {
		var cpf = document.getElementById('cpf').value;
		if (!validaCPF(cpf)) {
			e.preventDefault();
			alert('CPF inválido. Verifique o número digitado.');
			document.getElementById('cpf').focus();
		}
	});

	document.getElementById('cpf').addEventListener('input', function(e) {
		var value = e.target.value;
		var cpfPattern = value.replace(/\D/g, '')
							  .replace(/(\d{3})(\d)/, '$1.$2')
							  .replace(/(\d{3})(\d)/, '$1.$2')
							  .replace(/(\d{3})(\d)/, '$1-$2')
							  .replace(/(-\d{2})\d+?$/, '$1');
		e.target.value = cpfPattern;
	});
});



function limpa_formulário_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
            document.getElementById('ibge').value=("");
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
            document.getElementById('ibge').value=(conteudo.ibge);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }
        
const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const limparFormulario = () => {
	document.getElementById("endereco").value = "";
	document.getElementById("bairro").value = "";
	document.getElementById("cidade").value = "";
	document.getElementById("estado").value = "";
};

const preencherFormulario = (endereco) => {
	document.getElementById("endereco").value = endereco.logradouro;
	document.getElementById("bairro").value = endereco.bairro;
	document.getElementById("cidade").value = endereco.localidade;
	document.getElementById("estado").value = endereco.uf;
};

const pesquisarCep = async() => {
	limparFormulario();

	const cep = document.getElementById("cep").value.replace("-", "");
	const url = `https://viacep.com.br/ws/${cep}/json/`
	if (cepValido(cep)) {
		const dados = await fetch(url);
		const endereco = await dados.json();
		if (endereco.hasOwnProperty("erro")) {
			document.getElementById("endereco").value = "CEP não encontrado!";
		} else {
			preencherFormulario(endereco); 
		}
	} else {
		document.getElementById("endereco").value = "CEP incorreto!";
	}

};

document.getElementById("cep").addEventListener("focusout", pesquisarCep);