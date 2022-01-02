var sortedSquares = function(nums) {
    let res = nums.map(item => { return Math.pow(item,2) }).sort((a,b) => {return a -b})
    return res
    
};