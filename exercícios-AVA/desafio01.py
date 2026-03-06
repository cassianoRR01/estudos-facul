num1 = 0.0
num2 = 0.0
num3 = 0.0

def ler_numeros():
    global num1, num2, num3
    num1 = float(input("Digite o primeiro número: "))
    num2 = float(input("Digite o segundo número: "))
    num3 = float(input("Digite o terceito número: "))

def calcular_soma():
    soma = num1 + num2 + num3
    print(f"A soma é: ", soma)

def calcular_media():
    media = (num1 + num2 + num3) / 3
    print(f"A média é: ", media)


ler_numeros()
print(f"Os números escolhidos são: ", num1, num2, num3)
calcular_soma()
calcular_media()


    










