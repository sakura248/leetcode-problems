var reverseWords = function(s) {
  let arr = s.split(' ')
  // console.log(arr)
  
  for(let i=0;i<arr.length-1;i++) {
      let start = 0
      let end = arr[i].length-1
      
      while( start < end ) {
        
        // let  = b
        console.log('test', arr[i][start],arr[i][end])
        [arr[i][start], arr[i][end]] = [arr[i][end], arr[i][start]]
        start++
        end--
      }
      // console.log(arr)
  }
  
  // return arr.join(' ')
  
};

console.log(reverseWords("Let's take LeetCode contest"))