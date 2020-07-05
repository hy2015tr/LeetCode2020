# **5 - Longest Palindromic Substring [M]**

Given a string **s**, find the longest palindromic substring in **s**. You may
assume that the maximum length of **s** is 1000.

**Example 1:**

**Input:** "babad"

**Output:** "bab"

**Note:** "aba" is also a valid answer.

**Example 2:**

**Input:** "cbbd"

**Output:** "bb"


## **Solution:**

```JavaScript

var longestPalindrome = function(s) {

    if(s.length ===0) return "";
    let tmp = new Set(s);
    if (tmp.size===1) return s;

    let result = "";

    function getWord(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    for (let li = 0; li < s.length; li++) {
        let odd = getWord(s, li, li+1);
        let even = getWord(s, li-1, li+1);
        let tmp = odd.length > even.length ? odd : even;
        if (tmp.length > result.length) result = tmp;
    }

    return result;
};

```


## **Test Data:**

```JavaScript

// Test Data
const test01 = "babad";
const test02 = "cbbd";
const result = longestPalindrome(test01);
console.log(result);

```