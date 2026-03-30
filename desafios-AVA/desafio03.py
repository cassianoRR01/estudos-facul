nomeAluno = input("Digite o nome do aluno: ")
acumulador = 0.0
somaNotas = 0

while True:
    print("Nome do aluno: ", nomeAluno)
    nota = input("Digite uma nota(ou fim para encerrar): ")
    if nota.lower() == "fim":
        break 
    
    nota = float(nota)
    somaNotas = somaNotas + nota
    acumulador = acumulador + 1

if acumulador > 0:
    media = somaNotas / acumulador
else:
    media = 0



print("Nome do aluno: ", nomeAluno)
print("Media: ", media)





