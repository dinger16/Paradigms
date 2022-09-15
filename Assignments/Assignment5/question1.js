function fibGenerator() {
    let n0 = 0;
    let n1 = 1;
    return () => {
        let output = n0;
        let sum = n1+n0;
        n0 = n1;
        n1 = sum;
        return output;
    }
}

let f1 = fibGenerator()
let f2 = fibGenerator()

for (let i = 0; i < 15; i++) {
    console.log(f1())
}
console.log('------------------')
console.log(f2())
console.log(f2())
