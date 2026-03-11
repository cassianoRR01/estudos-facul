#exercicio da aula do dia 09/03/2026

veiculo = input("Tipo de veiculo(carro, moto, caminhão, oficial): ")
hora = int(input("Horario da passagem: "))

if veiculo == "carro":
    valor = 10
elif veiculo == "moto":
    valor = 5
elif veiculo == "caminhão":
    eixos = int(input("Quantidade de eixos: "))
    valor = eixos * 15
elif veiculo == "oficial":
    valor = 0


if veiculo == "oficial":
    valor_total: 0


if 6 <= hora <= 9 or 17 <= hora <= 20:
    valor_total = valor * 1.2
else:
    valor_total = valor



print(f'veiculo: veiculo')
print(f'Valor total: R$ {valor_total}')













    
    