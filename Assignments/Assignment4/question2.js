function findConsecutiveOnes(nums) {
    let max_consecutive = 0
    let cur_consecutive = 1

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == 1) {
            if (nums[i] === nums[i+1])
                cur_consecutive += 1
            else
                cur_consecutive = 1

            if (cur_consecutive >= max_consecutive)
                max_consecutive = cur_consecutive
        }
    }
    return max_consecutive
}

module.exports = {findConsecutiveOnes}
