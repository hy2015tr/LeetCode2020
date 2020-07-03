# **692 - Top K Frequent Words [M]** 

Given a non-empty list of words, return the *k* most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words
have the same frequency, then the word with the lower alphabetical order comes
first.

**Example 1:**

    Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2

    Output: ["i", "love"]
    
**Explanation:** "i" and "love" are the two most frequent words. Note that "i" comes before "love" due to a lower alphabetical order.

**Example 2:**

    Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4

    Output: ["the", "is", "sunny", "day"]

**Explanation:** "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

**Note:**

1.  You may assume *k* is always valid, 1 ≤ *k* ≤ number of unique elements.
2.  Input words contain only lowercase letters.

**Follow up:**

1.  Try to solve it in *O*(*n* log *k*) time and *O*(*n*) extra space.

## **Solution-1:**

**Note:** The following solution is not completely correct. It is missing sorting functionalty required in the question.

```JavaScript
var topKFrequent = function (words, k) {

  let arrTemp = [];
  let arrDistinctWords = [...new Set(words)];
  
  for (word of arrDistinctWords) {
    let countOfWord = words.filter(p => p === word).length;
    arrTemp.push({ "name": word, "count": countOfWord });
  }
  
  let arrNewList = [];
  for (let li = 0; li < k; li++) {
    arrNewList.push(arrTemp[li].name);
  }
  
  return arrNewList;
  
};

```

## **Solution-2:**

```JavaScript
var topKFrequent = function (words, k) {

  let arrTemp = [];
  let arrDistinctWords = [...new Set(words)];
  
  for (word of arrDistinctWords) {
    let countOfWord = words.filter(p => p === word).length;
    arrTemp.push({ "name": word, "count": countOfWord });
  }
  
  arrTemp.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  return arrTemp.slice(0,k).map(x => x.name);

};
  
```

## **Test Data:**

```JavaScript

const test01 = ["i", "love", "leetcode", "i", "love", "coding"];
const test02 = [ "xerox", "day", "sunny", "is", "the", "the", "the", "the", "sunny", "is", "is" ];
const result = topKFrequent(test01, 2);
console.log(result);

```