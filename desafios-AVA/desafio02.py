

def calculo_temp():
    temperatura = float(input("Ensira aqui a temperatura: "))
    if temperatura <= 7:
        return("Congelando.")
    elif temperatura <= 10:
        return("Frio.")
    elif temperatura <= 26:
        return("Ótimo.")
    else:
        return("Muito quente.")


print("O clima la fora está ", calculo_temp())


