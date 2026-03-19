qtd = int(input("Quantas vezes? "))
elefante = 1
incomodam = " incomodam"

while elefante <= qtd:
    if elefante == 1:
        print(elefante," elefante incomodam muita gente.")
    else: 
        print(elefante," elefantes incomodam muita gente.")
    elefante = elefante + 1
    quantos = incomodam * elefante 
    print(elefante, "elefantes", quantos," muito mais.")

    