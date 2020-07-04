var sortArrayByParity = function(arr) {

    const oddNumbers = [];
    const evenNumbers = [];
  
    arr.forEach(p => {
      p % 2 === 0 ? evenNumbers.push(p) : oddNumbers.push(p);
    });
    
      return evenNumbers.concat(oddNumbers);
      
  };

// Test Data
const test01 = [3,1,2,4];
const result = sortArrayByParity(test01);
console.log(result);
