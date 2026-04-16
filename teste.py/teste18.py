class ContaBancaria:
    def __init__(self, saldo):
        self.saldo = saldo

    def depositar(self, valor):
        self.saldo = self.saldo + valor
        return f"Seu saldo atual é de R${self.saldo}."
    
    def sacar(self, valor):
        if valor > self.saldo:
            return "Saldo insuficiente."
        
        self.saldo = self.saldo - valor
        return f"Seu saldo atual é de R${self.saldo}."
    

money = ContaBancaria(400)
print(money.depositar(50))
print(money.sacar(100))

        