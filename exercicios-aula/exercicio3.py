salario = float(input("digite um numero: "))

if salario <= 500:
    print("Seu salário esta na faixa A.")
elif 500 < salario <= 1000:
    print("Seu salário esta na faixa B.")
else:
    print("Seu salário esta na faixa C.")