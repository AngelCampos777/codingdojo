class Account:
    def __init__(self, int_rate = 0, balance = 0):
        self.int_rate = int_rate
        self.balance = balance 
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdrawal(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            print("insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self
    def display_info(self):
        print(f"Balance: ${self.balance}")
        return self
    def yield_int(self):
        if self.balance > 0:
            self.balance += self.balance * self.int_rate
        return self

account1 = Account(.05, 50)
account2 = Account(.07, 150)

accounts = [account1, account2]

# for account in accounts:
#     print(f"Current balance: {account.balance}")

account1.deposit(25).deposit(25).deposit(25).withdrawal(5).yield_int().display_info()
account2.deposit(25).deposit(25).withdrawal(5).withdrawal(5).withdrawal(5).withdrawal(5).yield_int().display_info()
