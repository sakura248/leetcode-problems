/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let ans = 0;
    for( i = 0 ; i<accounts.length; i++ ) {
        let eachSum = 0;
        for( j = 0 ; j < accounts[i].length ; j++ ) {
            eachSum += accounts[i][j]
        }
        ans = Math.max(ans, eachSum)
    }
    return ans

};