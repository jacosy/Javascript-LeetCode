// JavaScript source code

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    if(!J || !S)
        return 0;
    
    let jewelSet = new Set();
    for(let c of J){
        jewelSet.add(c);
    }
    
    let count = 0;
    for(let c of S){
        if(jewelSet.has(c)){
            count+=1;
        }
    }
    
    return count;
};