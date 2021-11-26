var sortSentence = function(s) {
    let arr = s.split(' ')
    let resultArr = [...Array(arr.length -1)]

    arr.map(el => {
        resultArr[el[el.length-1]-1] = el.slice(0,-1)
    })
    
    
    return resultArr.join(' ')
};

// Runtime: 60 ms, faster than 99.32% of JavaScript online submissions for Sorting the Sentence.
// Memory Usage: 38.3 MB, less than 86.18% of JavaScript online submissions for Sorting the Sentence.
