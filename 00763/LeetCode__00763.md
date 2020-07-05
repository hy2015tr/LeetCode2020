# **763 - Partition Labels [M]**

A string S of lowercase English letters is given. We want to partition this
string into as many parts as possible so that each letter appears in at most one
part, and return a list of integers representing the size of these parts.

**Example 1:**

    Input: S = "ababcbacadefegdehijhklij"
    Output: [9,7,8]

**Explanation:**

The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.


**Note:**

-   S will have length in range [1, 500].
-   S will consist of lowercase English letters ('a' to 'z') only.


## **Solution:**

```JavaScript

var partitionLabels = function(S) {

    let parts = [];
    let result = [];

    for(lk = 0; lk < S.length; lk++) {

        let first = S.indexOf(S[lk]);
        let last = S.lastIndexOf(S[lk]);

        for(let li = first; li <= last; li++) {
            let newLast = S.lastIndexOf(S[li]);
            if (newLast > last) last = newLast;
        }

        let part = S.substring(first, last + 1);
        parts.push(part);
        lk = last;
    }

    parts.forEach(x => result.push(x.length));
    return result;
};

```

## **Test Data:**

```JavaScript

// Test Data
const test01 = "ababcbacadefegdehijhklij";
const result = partitionLabels(test01);
console.log(result);

```