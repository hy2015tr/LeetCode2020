# **709 - To Lower Case [E]**

Implement function ToLowerCase() that has a string parameter str, and returns
the same string in lowercase.

**Example 1:**

**Input:** "Hello"

**Output:** "hello"

**Example 2:**

**Input:** "here"

**Output:** "here"

**Example 3:**

**Input:** "LOVELY"

**Output:** "lovely"


## **Solution:**

```JavaScript

var toLowerCase = function(str) {
    let result = "";
    const isUpperCase = string => /^[A-Z]*$/.test(string);
    for (const x of str) {
      if (isUpperCase(x)) {
        result += String.fromCharCode(x.charCodeAt(0) + 32);
      } else {
        result += x;
      }
    }
    return result;
  };

```


## **Test Data:**

```JavaScript

// Test Data
const test01 = "Hello";
const test02 = "here";
const test03 = "LOVELY";
const result = toLowerCase(test01);
console.log(result);

```
