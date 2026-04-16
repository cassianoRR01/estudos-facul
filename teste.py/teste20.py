class Produto:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

    def desconto(self):
        desconto = self.preco * 0.5
        return f"O {self.nome} com 50% de desconto é R${desconto}."
    

prod = Produto("macarrão", 15)
print(prod.desconto())
