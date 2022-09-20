function parityAnalysis(n){
    let sum = 0
    let num = n
    while (num > 0) {
        sum += num %10;
        num = Math.floor(num/10);
    }
    return (sum % 2 == n % 2);
}

module.exports = {parityAnalysis}