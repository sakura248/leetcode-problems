var countGoodTriplets = function(arr, a, b, c) {
    let count = 0
    const dif = (a,b) => {
      return Math.abs(a,b)
    }
     for(let i=0; i<arr.length-2; i++) {
        for(let j=1;j<arr.length-1;j++) {
            for(let k=2;k<arr.length;k++) {
              if( i < j && j < k ){
                if(dif(arr[i]-arr[j]) <= a ) {
                  if(dif(arr[j]-arr[k]) <= b ) {
                    if(dif(arr[k]-arr[i]) <= c ) {
                    count ++
                    }
                  } 
                } 
              }
          }
        }
    }
    return count
};

// Runtime: 104 ms, faster than 23.53% of JavaScript online submissions for Count Good Triplets.
// Memory Usage: 39.4 MB, less than 19.61% of JavaScript online submissions for Count Good Triplets.