function reversedSum(num1, num2) {
    num1 = Number(num1)
    reverse1 = ""
    while (num1 > 0) {
        reverse1 += String(`${num1 % 10}`)
        num1 = Math.floor(num1 / 10)
    }
    num2 = Number(num2)
    reverse2 = ""
    while (num2 > 0) {
        reverse2 += String(`${num2 % 10}`)
        num2 = Math.floor(num2 / 10)
    }

    return Number(reverse1) + Number(reverse2)
}


// console.log(`${reversedSum(9010, 14)}`)
// console.log(`${109+41}`)