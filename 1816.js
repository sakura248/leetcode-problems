var truncateSentence = function(s, k) {
    let resultArr = []
    let tempArr = s.split(' ')
    for(let i=0; i<k; i++) {
        resultArr.push(tempArr[i])
    }
    return resultArr.join(' ')
    
    
};

// Runtime: 68 ms, faster than 88.38% of JavaScript online submissions for Truncate Sentence.
// Memory Usage: 39.2 MB, less than 14.35% of JavaScript online submissions for Truncate Sentence.