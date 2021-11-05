var decompressRLElist = function(nums) {
    const result = [];
    for(let i = 0; i< nums.length; i++){
      if( i % 2 != 0 ) {
        let tmpArr = new Array(nums[i-1])
        tmpArr.fill(nums[i]);
        result.push(...tmpArr)
      }
    }
    return result
};