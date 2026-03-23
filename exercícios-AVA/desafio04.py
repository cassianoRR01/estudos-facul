num = 0

while True:
    opcao = int(input("1- Converter Bitcoins em Reais. \n2- Converter Reais em Bitcoins. \n3- Sair. \nOpção: "))
    if opcao == 1:
        num = float(input("Ensira um valor: "))
        result = num * 369579
        print(f"Valor em reais: {result:.2f}")
    if opcao == 2: 
        num = float(input("Ensira um valor: "))
        result = num / 369579
        print(f"Valor em reais: {result}")
    if opcao == 3:
        print("Processo encerrado.")
        break
    





    
    