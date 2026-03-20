valor = input("Digite um numero inteiro: ")
numero = int(valor)

total = 1

while numero > 0:
    total = total * numero
    numero = numero - 1

print("Valor do fatorial:", total)