notas = []
p = 1

while p <= 10:
    notas.append(float(input("Insira nota: ")))
    p = p + 1

print(f"Maior nota: {max(notas)} \nMenor nota: {min(notas)}")



