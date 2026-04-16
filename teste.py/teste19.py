class Retangulo:
    def __init__(self, largura, altura):
        self.largura = largura
        self.altura = altura

    def CalculoArea(self):
        area = self.largura * self.altura
        return f"A área do seu retangulo é {area}."
    
ret = Retangulo(5, 4)
print(ret.CalculoArea())
