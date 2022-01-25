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


// second time
var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    if(nums[right] < target) return right + 1
    if(nums[left] > target) return 0
    
    while(left <= right) {
        let middle = left + Math.floor((right-left)/2)
        let between = nums[middle-1] < target && target < nums[middle] // targetよりおおきく、次の値よりは小さい
        if(nums[middle] === target || between ) return middle

        if(target < nums[middle]) {
            right = middle-1
        } else {
            left = middle+1
        }
    }
};