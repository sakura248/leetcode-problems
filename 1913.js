var maxProductDifference = function(nums) {
    let test = nums.sort((a,b) => b-a)
    return test[0]*test[1] - test[nums.length-1]*test[nums.length-2]
};

// Runtime: 104 ms, faster than 51.31% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
// Memory Usage: 41.8 MB, less than 31.37% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.