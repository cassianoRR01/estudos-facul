class aluno:
    def __init__(self, nome, nota):
        self.nome = nome
        self.nota = nota

    def aprovacao(self):
        if self.nota >= 7:
            print(f"Olá {self.nome}, você está Aprovado!")
        else:
            print(f"Olá {self.nome}, você está Reprovado!")


al = aluno("João", 7)
al.aprovacao()
