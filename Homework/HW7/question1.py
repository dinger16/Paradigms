class move_robot:
    def __init__(self, n):
        self.count = 0
        self.n = n
        self.x = 0
        self.y = 0
        self.direction = 0

    def __iter__(self):
        return self

    def __next__(self):
        while self.count <= self.n:
            if self.direction == 0:
                self.x -= self.count
                self.count += 1
                self.direction += 1
                return '({}, {})'.format(self.x, self.y)
            elif self.direction == 1:
                self.y += self.count
                self.count += 1
                self.direction += 1
                return '({}, {})'.format(self.x, self.y)
            elif self.direction == 2:
                self.x += self.count
                self.count += 1
                self.direction += 1
                return '({}, {})'.format(self.x, self.y)
            else:
                self.y -= self.count
                self.count += 1
                self.direction = 0
                return '({}, {})'.format(self.x, self.y)
        else:
            raise StopIteration()

# for v in move_robot(4):
#     print(v)