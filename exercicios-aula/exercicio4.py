opc = int(input("Qual conversão fazer (1 - dolar, 2 - euro, 3 - libra): "))

if opc == 1:
   valor = float(input("Insira o valor: "))
   valor = valor * 5.22
   print(f"Valor: {valor:.2f}")
elif opc == 2:
   valor = float(input("Insira o valor: "))
   valor = valor * 6.05
   print(f"Valor: {valor:.2f}")
elif opc == 3:
   valor = float(input("Insira o valor: "))
   valor = valor * 7.02
   print(f"Valor: {valor:.2f}")
else:
   print("Opção invválida.")



   




