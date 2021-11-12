var restoreString = function(s, indices) {
    const tmp = new Array(indices.length)
    for(let i=0; i<indices.length; i++){
        tmp[indices[i]] = s[i]
    }
    return tmp.join('')
    
};