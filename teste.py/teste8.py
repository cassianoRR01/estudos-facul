opcao = 1

while opcao != 0:
    print("1 - soma")
    print("2 - subtração")
    print("3 - multiplicação")
    print("4 - divisão")
    print("0 - sair")
    opcao = int(input("Informar operação desejada: "))
    if opcao == 0:
        print("Operações encerradas.")
        break
    if opcao != 1 and opcao != 2 and opcao != 3 and opcao != 4:
        print("Opção inválida.")
        continue
    valor1 = int(input("Digite o primeiro valor: "))
    valor2 = int(input("Digite o segundo valor: "))
    if opcao == 1:
        resultado = valor1 + valor2
        print("resultado: ", resultado)
    if opcao == 2:
        resultado = valor1 - valor2
        print("resultado ", resultado)
    if opcao == 3:
        resultado = valor1 * valor2
    if opcao == 4:
        if valor1 <= 0 or valor2 <= 0:
            print("Não é possivel dividir por 0.")
        else:
            resultado = valor1 / valor2
            print("resultado ", resultado)
    print("Oprtação finalizada.")








