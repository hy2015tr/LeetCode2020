**905 - Sort Array By Parity [E]**

Given an array A of non-negative integers, return an array consisting of all the
even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

 

**Example 1:**

**Input:** [3,1,2,4]

**Output:** [2,4,3,1]

The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

 

**Note:**

1.  1 \<= A.length \<= 5000

2.  0 \<= A[i] \<= 5000


## **Solution:**

```JavaScript

var sortArrayByParity = function(arr) {

    const oddNumbers = [];
    const evenNumbers = [];
  
    arr.forEach(p => {
      p % 2 === 0 ? evenNumbers.push(p) : oddNumbers.push(p);
    });
    
      return evenNumbers.concat(oddNumbers);
      
  };

```


## **Test Data:**

```JavaScript

// Test Data
const test01 = [3,1,2,4];
const result = sortArrayByParity(test01);
console.log(result);

```