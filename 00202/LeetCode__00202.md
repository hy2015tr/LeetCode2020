# **202 - Happy Number [E]**

Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any
positive integer, replace the number by the sum of the squares of its digits,
and repeat the process until the number equals 1 (where it will stay), or
it **loops endlessly in a cycle** which does not include 1. Those numbers for
which this process **ends in 1** are happy numbers.

Return True if n is a happy number, and False if not.

**Example:**

**Input:** 19

**Output:** true

**Explanation:**

1<sup>2</sup> + 9<sup>2</sup> = 82

8<sup>2</sup> + 2<sup>2</sup> = 68

6<sup>2</sup> + 8<sup>2</sup> = 100

1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1

## **Solution:**

```JavaScript

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

```

## **Test Data:**

```JavaScript

// Test Data
const test01 = 19;
const test02 = 21;
const result = isHappy(test01);
console.log(result);

```