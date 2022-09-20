function maxConsecutiveOnes(nums) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {     // changed bounds of loop
        if (nums[i] === 1) count++;
        if (count > max) max = count;
        if (nums[i] != 1) count = 0;            // changed condition to reset count
    }
    return max;
}
