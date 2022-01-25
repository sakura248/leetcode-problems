var search = function(nums, target) {
    return nums.indexOf(target)

};

// Runtime: 84 ms, faster than 45.47% of JavaScript online submissions for Binary Search.
// Memory Usage: 42.5 MB, less than 32.98% of JavaScript online submissions for Binary Search.

// correct binary search 
var search = function(nums, target) {
    // return nums.indexOf(target)
    let left = 0
    let right = nums.length
    
    
    while ( left <= right ) {
        let middle = left + Math.floor((right-left) / 2)
        console.log(middle)
        if( nums[middle] === target ) return middle
        if( target < nums[middle]　) {
            right = middle - 1
            console.log('right', right)
        } else {
            left = middle + 1
            console.log('left', left)
        }
        
    }
    return -1
};