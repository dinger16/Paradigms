def fibonacci(n):
    i = 0
    j = 1
    for count in range(n+1):
        if count == 0:
            yield 0
        elif count == 1:
            yield 1
        else:
            temp = i + j
            i = j
            j = temp
            yield temp

# for x in fibonacci(6):
#     print(x, end=' ')

# print()