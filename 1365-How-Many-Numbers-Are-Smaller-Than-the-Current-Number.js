/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    let ansArr = []
    
    for(let i=0; i<nums.length; i ++) {
    let count = 0;

        for(let j=0; j<nums.length; j++) {
            if(i != j) {
                if(nums[i]>nums[j]) count++
            }
        }
        ansArr.push(count)

    }
    return ansArr
    
};