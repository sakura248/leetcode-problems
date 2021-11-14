var xorOperation = function(n, start) {
    const temp = []    
    temp.push(start)
    for(let i=1; i < n; i++) {
        temp.push(start + 2*i)
    }
    return result = temp.reduce(( previousValue, currentValue ) => previousValue ^ currentValue,0)
 };