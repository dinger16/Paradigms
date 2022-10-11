class fibonacci:
    def __init__(self, n):
        self.count = 0
        self.i = 0
        self.j = 1
        self.n = n

    def __iter__(self):
        return self

    def __next__(self):
        while self.count <= self.n:
            if self.count == 0:
                self.count += 1
                return 0
            elif self.count == 1:
                self.count += 1
                return 1
            else:
                number = self.i + self.j
                self.i = self.j
                self.j = number
                self.count += 1
                return number
        else:
            raise StopIteration()

# for x in fibonacci(6):
#     print(x, end=' ')

# print()