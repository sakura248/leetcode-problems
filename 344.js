var reverseString = function(s) {
  let resultArr = []
  let start = 0
  let end = s.length-1

  while(start < end) {
      [s[start],s[end]] = [s[end], s[start]]
      // console.log("res", resultArr[start], resultArr)
      start++
      end--
  }
  // return s
  
  
};