# make_withdrawal(self, amount) decreases user balance by amount

# display_user_balance(self) print users name and balance

# transfer_money(self, other_user, amount) decrease user by amount 
# increase other by same amount
class User():
    def __init__(self, name, email, balance = 0):
        self.name = name
        self.email = email
        self.balance = balance 
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdrawal(self, amount):
        self.balance -= amount
        return self
    def transfer(self, other_user, amount):
        self.balance -= amount
        other_user.balance += amount
        return self
    def display_balance(self):
        print(self.balance)

user1 = User('Angel', 'email1@email.com', 500)
user2 = User('Llama', 'email2@email.com', 3.50)
user3 = User('Gubs', 'email3@email.com', 5000)
user4 = User('cat', 'email4@email.com')

users = [user1, user2, user3, user4]

for user in users:
    print(f"Name: {user.name}, Current balance: {user.balance}")

user1.transfer(user2, 250)

user1.deposit(3000)

user3.withdrawal(200)

for user in users:
    print(f"Name: {user.name}, Current balance: {user.balance}")

user3.withdrawal(300).withdrawal(300).withdrawal(300).withdrawal(300).withdrawal(300).withdrawal(300)

for user in users:
    print(f"Name: {user.name}, Current balance: {user.balance}")