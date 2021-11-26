var sumOddLengthSubarrays = function(arr) {
    let tempSum = 0
    let temp = 0
    for (let i=0; i< arr.length; i++) {
        for (let j=0; j<arr.length+1; j++) {
            if((i+j) % 2 !== 0 && j >= i){
              temp = arr.slice(i,j).reduce((sum, el) => {return sum + el})
              tempSum += temp
            }
        }
    }
    return tempSum
};

// Runtime: 80 ms, faster than 58.39% of JavaScript online submissions for Sum of All Odd Length Subarrays.
// Memory Usage: 44.7 MB, less than 19.68% of JavaScript online submissions for Sum of All Odd Length Subarrays.