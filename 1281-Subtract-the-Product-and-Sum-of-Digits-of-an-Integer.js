/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    let arrN = Array.from(String(n),Number)
    // console.log(arrN)
    let product = 1;
    let sum = 0;
    for(let i =0; i<arrN.length; i++) {
        product *= arrN[i];
        sum += arrN[i];
    }

    return product - sum;
};