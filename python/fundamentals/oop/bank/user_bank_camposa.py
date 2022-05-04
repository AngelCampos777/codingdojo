class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = Account(int_rate=0.02, balance=0)


    def deposit(self, amount):
        self.account.balance += amount
        return self


    def withdrawal(self, amount):
        self.account.balance -= amount
        return self


    def transfer(self, other_user, amount):
        self.account.balance -= amount
        other_user.account.balance += amount
        return self


    def display_balance(self):
        print(self.account.display_info())
        return self


        
class Account:
    def __init__(self, int_rate = 0, balance = 0):
        self.int_rate = int_rate
        self.balance = balance 
    def deposit(self, amount):
        self.balance += amount
        print(self.balance)
        return self
    def withdrawal(self, amount):
        if self.balance >= amount:
            self.balance -= amount
            print(self.balance)
        else:
            print("insufficient funds: Charging a $5 fee")
            self.balance -= 5
            print(self.balance)
        return self
    def yield_int(self):
        if self.balance > 0:
            self.balance += self.balance * self.int_rate
            print(self.balance)
        return self
    def display_info(self):
        print(f"Balance: ${self.balance}")
        return self
    def __repr__(self):
        return f"{self.balance}"

user1 = User('Angel', 'email1@email.com')
user2 = User('Llama', 'email2@email.com')
user3 = User('Gubs', 'email3@email.com')
user4 = User('cat', 'email4@email.com')

users = [user1, user2, user3, user4]

user1.deposit(500).display_balance()
user1.withdrawal(50).display_balance()

# to do multiacct new py?