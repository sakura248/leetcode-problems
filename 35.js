/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  // let index = nums.indexOf(target)
  // if(index !== -1) {
  //     return index
  // } 
  
  let start = 0;
  let end = nums.length-1
  
      
  while(start <= end) {
    let mid = Math.floor( (start + end) /2)
    if(target === nums[mid] ){
      return mid  
    } else if(target > nums[mid]){
      start = mid + 1
    } else if (target < nums[mid]) {
      end = mid - 1
    } 
  }
  return start

};