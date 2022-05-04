num1 = 42 # number
num2 = 2.3 # float
boolean = True # boolean
string = 'Hello World' # string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #dictionary initialize
fruit = ('blueberry', 'strawberry', 'banana') #tuple initialize
print(type(fruit)) #tuple access value
print(pizza_toppings[1])# list access value
pizza_toppings.append('Mushrooms') #list add value
print(person['name'])# dictionary access value
person['name'] = 'George'#dictionary change value
person['eye_color'] = 'blue' #dictionary add key and value?
print(fruit[2])#tuple acces value

if num1 > 45:#conditional if
    print("It's greater")#log statement
else:#conditional else
    print("It's lower")#log statement

if len(string) < 5: #conditional if length check
    print("It's a short word!")#log statement
elif len(string) > 15: #conditional else if length check
    print("It's a long word!")#log statement
else: #conditional else length check
    print("Just right!")#log statement

for x in range(5):#for loop start 0 stop 5
    print(x) #log values
for x in range(2,5):#for loop start 2 stop 5
    print(x)#log values
for x in range(2,10,3):#for loop start 2 stop 10 increment byu 3
    print(x)#log values
x = 0#starting point
while(x < 5):#while loop (stopping point)
    print(x)#log values
    x += 1#increment

pizza_toppings.pop()#list delete last value
pizza_toppings.pop(1)#list delete first value?

print(person) #log dictionary
person.pop('eye_color') #remove key and value eyecolor
print(person) #log changed dictionary

for topping in pizza_toppings: #for loop sequence
    if topping == 'Pepperoni':#string check
        continue #continue
    print('After 1st if statement')#log statement
    if topping == 'Olives':#string check
        break#break

def print_hello_ten_times():#function
    for num in range(10): #for loop start num end 10
        print('Hello')#log hello for each increment

print_hello_ten_times()#call function

def print_hello_x_times(x): #function (parameter)
    for num in range(x):#for loop start num end x 
        print('Hello') #log hello for each increment

print_hello_x_times(4)#call function (argument)

def print_hello_x_or_ten_times(x = 10): #function (parameter default)
    for num in range(x):#for loop start num end x 
        print('Hello')#log hello for each increment

print_hello_x_or_ten_times()#call function
print_hello_x_or_ten_times(4)#call function (argument)


"""
Bonus section
"""

# print(num3)NameError
# num3 = 72 should be good? variable declaration number
# fruit[0] = 'cranberry'
# print(person['favorite_team']) KeyError 'favorite team'
# print(pizza_toppings[7])IndexError: list index out of range
#   print(boolean)IndentationError: unexpected indent
# fruit.append('raspberry') AttributeError: 'tuple' object has no attribute 'append'
# fruit.pop(1) AttributeError tupple has no attribute pop