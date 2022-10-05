import math

class Point:
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y
    
    def print(self):
        print("(" + str(self.x) + ", " + str(self.y) + ")")


def distance(p1, p2):
    return math.sqrt(math.pow((p2.x-p1.x), 2) + math.pow((p2.y-p1.y), 2))


# p1 = Point(-7,-4)
# p2 = Point(17,6.5)

# p1.print()
# p2.print()

# print(distance(p1, p2))