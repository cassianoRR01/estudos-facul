nome = 1
mediaTot = 0

while nome != "0":
    nome = str(input("Ensira um nome(ou 0 para encerrar): "))
    if nome == "0":
        break
    nota1 = float(input("Ensira a primeira nota: "))
    nota2 = float(input("Ensira a segunda nota: "))
    media = (nota1 + nota2) / 2
    mediaTot = mediaTot + media

print(f"Media total da turma: {mediaTot:.1f}")




    


    
