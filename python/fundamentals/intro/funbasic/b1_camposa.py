#1 basic print all int 0 to 150
# for i in range(0, 151):
#     print(i)
#2 mult 5 print all mult 5 from 5 to 1000
# for i in range(5, 1001, 5):
#     print(i)
#3 counting dojo print int 1 to 100 if % 5 coding if % 10 coding dojo
# for i in range(1, 101):
#     if(i % 10 == 0):
#         print('Coding Dojo')
#     elif(i % 5 == 0):
#         print('Coding')
#     else:
#         print(i)
#4 huge add odd int 0 to 500k return final
# sum = 0
# for i in range(0, 500000):
#     if(i % 2 == 1):
#         sum = sum + i
# print(sum)
#5 countdown 4 print positive int start at 2018 count down by 4
# for i in range(2018, 0, -4):
#     print(i)
#6 flex counter count from low to high print only int that are multiples of mult
lo_num = 0
hi_num = 20
mult = 3
for i in range(lo_num, hi_num):
    if(i % mult == 0):
        print(i)