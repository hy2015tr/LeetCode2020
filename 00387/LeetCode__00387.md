# **387 - First Unique Character in a String [E]**

Given a string, find the first non-repeating character in it and return its
index. If it doesn't exist, return -1.

**Examples:**

s = "leetcode"

return 0.

s = "loveleetcode"

return 2.

**Note:** You may assume the string contains only lowercase English letters.


## **Solution-1:**

```JavaScript

var firstUniqCharV1 = function (s) {
  
  for (li = 0; li < s.length; li++) {
    if (s.indexOf(s[li]) === s.lastIndexOf(s[li])) {
      return li;
    }
  }

  return -1;

};

```

## **Solution-2:**

```JavaScript

var firstUniqCharV2 = function (s) {
  
  const countMap = new Map();

  for (x of s) {
    countMap.set(x, countMap.get(x) + 1 || 1);
  }

  for (x of s) {
    if (countMap.get(x) === 1) return s.indexOf(x);
  }

  return -1;

};

```


## **Test Data:**

```JavaScript

// Test Data
const test01 = "leetcode";
const test02 =  "loveleetcode";
const result = firstUniqCharV1(test01);
console.log(result);


```
