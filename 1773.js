var countMatches = function(items, ruleKey, ruleValue) {
    let result = 0;
    for(let i = 0; i < items.length; i++){
       if(ruleKey == "type" ){
            if(items[i][0] == ruleValue) {
                console.log(items[i][0])
                result ++;
            }
        } if(ruleKey == "color"){
            if(items[i][1] == ruleValue) {
                result ++;
            }
        } if(ruleKey == "name") {
            if(items[i][2] == ruleValue) {
                result ++;
            }
        } 
    }
    return result
    
};