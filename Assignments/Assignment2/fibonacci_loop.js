function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let secondLast = 0
    let last = 1
    let sum = 0
    let i = 2
    while (i <= n) {
        sum = last + secondLast
        secondLast = last
        last = sum
        i++
    }
    return sum
}

console.log(`${fibonacci(10)}`)