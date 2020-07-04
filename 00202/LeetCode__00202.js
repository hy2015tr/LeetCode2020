var isHappy = function(n) {
    
    let newNumber = null;
    let arrNumbers = [];
  
    do {
  
        newNumber = 0;
        let digits = n.toString().split("");
    
        for (x of digits) {
            newNumber += x * x;
        }
    
        if (arrNumbers.find(x=> x==newNumber)) return false;

        arrNumbers.push(newNumber);
        n = newNumber;
  
    } while (newNumber !== 1);
  
    return true;
      
  };


// Test Data
const test01 = 19;
const test02 = 21;
const result = isHappy(test01);
console.log(result);