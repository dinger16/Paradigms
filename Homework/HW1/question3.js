function computeEnumeration(termPositions) {
    return termPositions.map(computeValue)
}

function computeValue(position) {
    if (position < 1)
        return null
    // arrows correspond to what operation to perform
    // let direction = [right, diag_left, down, diag_right]  ==> [1, 2, 3, 4]
    let direction = [1, 2, 3, 4, 4]
    let num = 2
    let den = 2
    let direction_counter = 0
    for (let i = 1; i < position; i++) {
        // console.log(`${num}/${den}`)
        switch (direction[direction_counter]) {
            case 1:
                den += 2        // if arrow right, add two to denominator
                break
            case 2:
                num += 2        // if arrow diag_left, add two to numerator and sub two from denominator
                den -= 2
                break
            case 3:
                num += 2        // if arrow down, add two to numerator
                break
            case 4:
                num -= 2        // if arrow diag_right, sub two from numerator and add two to denominator
                den += 2
                break
        }
        direction_counter++
        if (direction_counter === direction.length) {
            direction_counter = 0
            direction.push(2)           // add two more diag_lefts
            direction.push(2)
            direction.push(4)           // add two more diag_rights
            direction.push(4)
            direction.sort()
        }
    }
    return `${num}/${den}`
}

termPositions = [1, 15, 8, 2]
console.log(computeEnumeration(termPositions))

termPositions = [3, 6, -1, 108]
console.log(computeEnumeration(termPositions))