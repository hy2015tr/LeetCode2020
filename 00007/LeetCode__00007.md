# **7. Reverse Integer – [E]**

Given a 32-bit signed integer, reverse digits of an integer.

**Example 1:**

    Input: 123

    Output: 321

**Example 2:**

    Input: -123

    Output: -321

**Example 3:**

    Input: 120

    Output: 21

**Note:**  
Assume we are dealing with an environment which could only store integers within
the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this
problem, assume that your function returns 0 when the reversed integer
overflows.

## **Solution:**

```JavaScript

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

```


## **Test Data:**

```JavaScript

// Test Data
const test01 = 123;
const test02 = -123;
const test03 = 120;
const result = reverse(test01);
console.log(result);

```
