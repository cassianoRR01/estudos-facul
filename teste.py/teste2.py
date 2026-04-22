def pular_nuvens(nuvens):
    saltos = 0
    indice = 0

    while indice < len(nuvens) - 1:
        if indice + 2 < len(nuvens) and nuvens[indice + 2] == 0:
            indice += 2
        else:
            indice += 1
        
        saltos += 1

    return saltos


nuvens = [0, 0, 1, 0, 0, 1, 0]
print(pular_nuvens(nuvens))