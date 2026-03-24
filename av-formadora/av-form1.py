qntProduto = int(input("Insira a quantidade de produtos: "))
listaProd = []
listaPreco = []
listaQuanti = []
p = 0
subTotal = 0

while p <= (qntProduto - 1):
    listaProd.append(input("Nome do produto: "))
    listaPreco.append(float(input("Preço da unidade: ")))
    listaQuanti.append(int(input("Quantidade comprada: ")))
    p = p + 1 

for preco, quanti in zip(listaPreco, listaQuanti):
    subTotal = subTotal + preco * quanti

print(f"Subtotal: {subTotal:.2f}")

pagamento = int(input("Forma de pagamento: \n1- À vista \n2- Cartão de crédito \nOpção: "))
desconto = 0
precoFinal = 0

if pagamento == 1:
    if subTotal > 200:
        desconto = subTotal * 15 / 100
        precoFinal = subTotal - desconto
    elif 100 <= subTotal <= 200:
        desconto = subTotal * 10 / 100
        precoFinal = subTotal - desconto
    else:
        precoFinal = subTotal
elif pagamento == 2:
    precoFinal = subTotal
else:
    print("Opção inválida.")

print(f"Produtos: {listaProd}")
print(f"Preço único respectivo de cada produto: {listaPreco}")
print(f"Quantidade respectiva de cada produto: {listaQuanti}")
print(f"Subtotal: {subTotal}")
print(f"Valor a pagar: {precoFinal}")