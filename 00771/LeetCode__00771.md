# **771 - Jewels and Stones [E]**

You're given strings J representing the types of stones that are jewels,
and S representing the stones you have.  Each character in S is a type of stone
you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are
letters. Letters are case sensitive, so "a" is considered a different type of
stone from "A".

**Example 1:**

**Input:** J = "aA", S = "aAAbbbb"

**Output:** 3

**Example 2:**

**Input:** J = "z", S = "ZZ"

**Output:** 0

**Note:**

-   S and J will consist of letters and have length at most 50.

-   The characters in J are distinct.


## **Solution:**

```JavaScript

var numJewelsInStones = function(J, S) {
    
    let count = 0;
    
    for(let x of J) {
        for(let y of S) {
            if (x===y) count++;
        }
    }
    
    return count;
    
};

```

## **Test Data:**

```JavaScript

// Test Data
const test01_J = "aA";
const test01_S = "aAAbbbb";
const test02_J = "z";
const test02_S = "ZZ";
const result = numJewelsInStones(test01_J, test01_S);
console.log(result);

```