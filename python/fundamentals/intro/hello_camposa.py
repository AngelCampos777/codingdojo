# 1. TASK: print "Hello World"
print("hello world")
# 2. print "Hello Noelle!" with the name in a variable
name = "Angel"
print("hello", name)	# with a comma
print("hello " + name)	# with a +
# 3. print "Hello 42!" with the number in a variable
name = 42
print("hello", str(name))	# with a comma
print("hello " + str(name))	# with a +	-- this one should give us an error!
# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "sushi"
fave_food2 = "pizza"
print("I love to eat {} and {}.".format(fave_food1,fave_food2)) # with .format()
print(f"I love to eat {fave_food1} and {fave_food2}.") # with an f string

# capitals = {"Washington":"Olympia","California":"Sacramento","Idaho":"Boise","Illinois":"Springfield","Texas":"Austin","Oklahoma":"Oklahoma City","Virginia":"Richmond"}
# # another way to iterate through the keys
# for key in capitals.keys():
#      print(key)
# # output: Washington, California, Idaho, Illinois, Texas, Oklahoma, Virginia
# #to iterate through the values
# for val in capitals.values():
#      print(val)
# # output: Olympia, Sacramento, Boise, Springfield, Austin, Oklahoma City, Richmond
# #to iterate through both keys and values
# for key, val in capitals.items():
#      print(key, " = ", val)
# # output: Washington = Olympia, California = Sacramento, Idaho = Boise, etc

# for count in range(0,5):
#     print("looping =", count)

# count = 0
# while count < 5:
#     print("looping - ", count)
#     count += 1

# y = 3
# while y > 0:
#     print(y)
#     y = y - 1
# else:
#     print("Final else statement")

# for val in "string":
#     if val == "i":
#         continue
#     print(val)
# # output: s, t, r, n, g
# # notice, no i in the output, but the loop continued after the i

# y = 3
# while y > 0:
#     print(y)
#     y = y - 1
#     if y == 0:
#         break
# else:		# only executes on a clean exit from the while loop (i.e. not a break)
#    print("Final else statement")
# # output: 3, 2, 1

