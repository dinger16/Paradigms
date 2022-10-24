def move_robot(n):
    x = 0
    y = 0
    direction = 0

    for count in range(n+1):
        if direction == 0:
            x -= count
            direction += 1
            yield '({}, {})'.format(x, y)
        elif direction == 1:
            y += count
            direction += 1
            yield '({}, {})'.format(x, y)
        elif direction == 2:
            x += count
            direction += 1
            yield '({}, {})'.format(x, y)
        else:
            y -= count
            direction = 0
            yield '({}, {})'.format(x, y)

# for v in move_robot(4):
#     print(v)