var numberOfSteps = function(num) {
    let count = 0;
    let tmp = num;

    for(let i=tmp; i >= 0; i--) {

        if(tmp % 2 == 0 && tmp != 0) {
            count++
            tmp = tmp/2

        } else if(tmp % 2 != 0) {
            count++
            tmp --
        } else {
          break
        }
    }
    return count
};