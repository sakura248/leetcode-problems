var numberOfMatches = function(n) {
    let i = n
    let matchCount = 0;
    
    while(i>1) {
        if(i % 2 === 0) {
            matchCount += i/2
            i = i/2
        } else {
            matchCount += (i-1)/2 
            i = (i+1)/2  
        }
    }
    
    return matchCount
   
};