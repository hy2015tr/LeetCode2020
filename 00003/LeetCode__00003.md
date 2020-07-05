**3 - Longest Substring Without Repeating Characters [M]**

Given a string, find the length of the **longest substring** without repeating
characters.

**Example 1:**

**Input:** "abcabcbb"

**Output:** 3

**Explanation:** The answer is "abc", with the length of 3.

**Example 2:**

**Input:** "bbbbb"

**Output:** 1

**Explanation:** The answer is "b", with the length of 1.

**Example 3:**

**Input:** "pwwkew"

**Output:** 3

**Explanation:** The answer is "wke", with the length of 3.

Note that the answer must be a **substring**, "pwke" is a *subsequence* and not
a substring.


## **Solution-2:**

```JavaScript

function lengthOfLongestSubstring(s) {
    
    let start = 0;
    let maxLen = 0;
    let mapTmp = new Map();
  
    for(var i = 0; i < s.length; i++) {
        let ch = s[i];
        let idx = mapTmp.get(ch);
        if(idx >= start) start = idx + 1;
        mapTmp.set(ch, i);
        if(i - start + 1 > maxLen) maxLen = i - start + 1;
    }
  
    return maxLen;
    
};

```


## **Test Data:**

```JavaScript

// Test Data
const test01 = "abcabcbb";
const test02 = "bbbbb";
const test03 = "pwwkew";
const result = lengthOfLongestSubstring(test01);
console.log(result);

```