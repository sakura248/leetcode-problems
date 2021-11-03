/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    let x ="";
    let char = "";
    
    for (i=0; i< address.length; i++) {
        if(address[i] == ".") {
            x = "["+ address[i] +"]"
        } else {
            x = address[i]
        }  
        char = char + x
        
    } 
    return char

};