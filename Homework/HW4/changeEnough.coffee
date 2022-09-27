changeEnough = (changeInPocket, amount) -> 
    return (0.25 * changeInPocket[0]) + (0.1 * changeInPocket[1]) + (0.05 * changeInPocket[2]) + (0.01 * changeInPocket[3]) >= amount

# Keep the line below so we can test your code!
module.exports = { changeEnough }