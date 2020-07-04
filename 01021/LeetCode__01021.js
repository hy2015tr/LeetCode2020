var removeOuterParentheses = function(S) {

    let result = "";
    let openPrnts = 0;
  
    for (let x of S) {
      if (x === ")" )  openPrnts--;
      if (openPrnts > 0) result += x;
      if (x === "(") openPrnts++; 
    }
  
    return result;       
};


// Test Data
const test01 = "(()())(())";
const test02 = "(()())(())(()(()))";
const test03 = "()()";
const result = removeOuterParentheses(test01);
console.log(result);