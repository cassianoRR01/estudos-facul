def calc_soma(n1, n2):
    soma = n1 + n2
    return soma

def calc_media(n1, n2):
    media = (n1 + n2) / 2
    return media


n1 = float(input("Primeiro numero: "))
n2 = float(input("Segundo numero: "))

print(calc_soma(n1, n2))
print(calc_media(n1, n2))

