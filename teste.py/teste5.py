nome = " "
peso = 0.
altura = 0.
imc = 0.

def ler_dados():
    global nome, peso, altura 
    nome = input("Nome: ")
    peso = float(input("Peso: "))
    altura = float(input("Altura: "))

def calculo_imc():
    global peso, altura
    imc = peso / pow(altura, 2)
    return round(imc, 2)

def avalia_imc():
    imc = calculo_imc()
    if imc < 18.5:
        return "abaixo do peso."
    elif imc >= 18.5 and imc < 25:
        return "no peso ideal."
    else:
        return "acima do peso."
    
ler_dados()
imc = calculo_imc()
msg = avalia_imc()
print(f'{nome} está {msg}')




