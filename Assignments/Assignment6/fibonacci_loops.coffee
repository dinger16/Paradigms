fibonacci = (n) ->
    if n < 0 
        return null
    if n == 0
        0
    if n == 1
        1

    [secondLast, last, sum, i] = [0, 1, 0, 2]
    while i <= n
        sum = last + secondLast
        secondLast = last
        last = sum
        i++
    
    sum
