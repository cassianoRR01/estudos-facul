aprovacao = 7.0

exame = 6.0 

bimestres = 4 

nome = "Pedro Henrique"

notas = [7.9, 8.5, 5.9, 8.1]

mensagem = ''

soma = 0 
for nota in notas: 
    soma += nota

media = soma / bimestres 

if media >= aprovacao:
    mensagem = 'Aprovado'

elif media >= exame:
    mensagem = 'Exame'
else:
    mensagem = 'Reprovado'


print ("Nome: %s" % nome)
print ("Média anual: %8.2f" % media)
print ("Status: %s" % mensagem)

