import math

class Point:
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y
    
    def print(self):
        print("(" + str(self.x) + ", " + str(self.y) + ")")

    def distance_to_origin(self):
        return math.sqrt(math.pow(abs(self.x), 2) + math.pow(abs(self.y), 2))

    def __gt__(self, other):
        return self.distance_to_origin() > other.distance_to_origin()

    def __ge__(self, other):
        return self.distance_to_origin() >= other.distance_to_origin()

    def __eq__(self, other):
        return self.distance_to_origin() == other.distance_to_origin()

    def __lt__(self, other):
        return self.distance_to_origin() < other.distance_to_origin()

    def __le__(self, other):
        return self.distance_to_origin() <= other.distance_to_origin()

# p1 = Point(2, 3)
# p2 = Point(-3, 1)
# p3 = Point(-2, -3)

# print(p1 > p2)
# print(p1 == p2)
# print(p1 < p2)
# print(p1 == p3)
# print(p1 >= p2)
# print(p1 <= p2)