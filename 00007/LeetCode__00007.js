var reverse = function(x) {
    
    const isNegative = x < 0;

    if (isNegative) x = x * -1;
    if (x > Math.pow(2,31)) return 0;
  
    let strNumber = x.toString();
    let strReversed = [...strNumber].reverse().join('');
    let result = Number.parseInt(strReversed);

    if (result > Math.pow(2,31)) return 0;
    if (isNegative) result = result * -1;
    
    return result;
    
};


// Test Data
const test01 = 123;
const test02 = -123;
const test03 = 120;
const result = reverse(test01);
console.log(result);