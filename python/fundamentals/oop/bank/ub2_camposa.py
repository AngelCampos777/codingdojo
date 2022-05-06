class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        # self.account = Account(int_rate=0.02, balance=100) #initialize inside a list so i can push into it later?
        self.accounts = []

    def deposit(self, amount, selected_accounts):
        for account in self.accounts:
            if account.name == selected_accounts:
                account.deposit(amount)
        return self

    def withdrawal(self, amount, selected_accounts):
        for account in self.accounts:
            if account.name == selected_accounts:
                account.withdrawal(amount)
        return self

    def transfer(self, other_user, amount):
        self.account.balance -= amount
        other_user.account.balance += amount
        return self

    def display_balance(self, selected_accounts):
        for account in self.accounts:
            print(account.display_info())
        return self

    def make_account(self, name, int_rate, balance):
        self.accounts.append(Account(name, int_rate, balance))#cant create inside itself?
        return self

    def view_accounts(self):
        self.account.len(Account)# might be wrong notation
        return self


class Account:
    def __init__(self, name = 'Checking', int_rate = 0, balance = 0 ):
        self.int_rate = int_rate
        self.balance = balance
        self.name = name

    def deposit(self, amount):# we should dictate which account we are adding to
        self.balance += amount
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

    def modify_interest(self, amount):
        self.name.int_rate += amount
        print(f"New Rate: ${self.int_rate}")
        return self

    def modify_name(self, new_name):
        self.name = self.new_name
        print(f"New Acct Name: ${self.name}")
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

# user1.deposit(100, 'checking').display_balance()
# user1.make_account().view_accounts()

# to do multiacct new py?

user1.make_account("checking", .02, 500).display_balance('checking')
user1.make_account("savings", .05, 1500).display_balance('savings')