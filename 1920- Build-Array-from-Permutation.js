var buildArray = function(nums) {
    let ans = [];
    for(i=0; i<nums.length; i++) {
        ans.push(nums[nums[i]]);
    }
        return ans;
};