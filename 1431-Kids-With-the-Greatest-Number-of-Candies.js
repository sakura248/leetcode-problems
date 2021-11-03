/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    let numArr= []
    let newArr=[];
    for (let i=0;i<candies.length;i++) {
        let currentCandy = candies[i]+extraCandies
        if(Math.max(...candies) <= currentCandy ) {
            newArr.push(true)
        } else {
            newArr.push(false)
        }
        numArr.push(currentCandy)
    }
    return newArr
};
