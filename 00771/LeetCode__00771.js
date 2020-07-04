var numJewelsInStones = function(J, S) {
    
    let count = 0;
    
    for(let x of J) {
        for(let y of S) {
            if (x===y) count++;
        }
    }
    
    return count;
    
};



// Test Data
const test01_J = "aA";
const test01_S = "aAAbbbb";
const test02_J = "z";
const test02_S = "ZZ";
const result = numJewelsInStones(test01_J, test01_S);
console.log(result);
