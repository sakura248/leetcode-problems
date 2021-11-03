/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let ans =[];
    sums = 0;
    for (i=0; i<nums.length; i++) {
        sums += nums[i]
        
        ans.push(sums)
        
    } 
       
    return ans;
};
