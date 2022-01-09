var twoSum = function(numbers, target) {
  let answer;
    for( let i = 0 ; i < numbers.length ; i++ ) {
        let sub = target - numbers[i]
        for( let j = i+1 ; j < numbers.length ; j++ ) {
            if( numbers[j] === sub ) {
                answer = [i+1,j+1]
            }
        }
    }
  return answer
      
};

