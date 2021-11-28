var shuffle = function(nums, n) {
    const result = []
    for(let i=0; i < n;  i++) {
        result.push(nums[i])
        result.push(nums[i+n])
    }
    
    return result
};
// Runtime: 110 ms, faster than 22.97% of JavaScript online submissions for Shuffle the Array.
// Memory Usage: 39.7 MB, less than 99.63% of JavaScript online submissions for Shuffle the Array.