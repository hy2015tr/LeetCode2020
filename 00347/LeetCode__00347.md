# **347 - Top K Frequent Elements [M]**

Given a non-empty array of integers, return the *k* most frequent elements.

**Example 1:**

    Input: nums = [1,1,1,2,2,3], k = 2

    Output: [1,2]


**Example 2:**

    Input: nums = [1], k = 1

    Output: [1]

**Note:**

-   You may assume *k* is always valid, 1 ≤ *k* ≤ number of unique elements.

-   Your algorithm's time complexity **must be** better than O(*n* log *n*),
    where *n* is the array's size.

-   It's guaranteed that the answer is unique, in other words the set of the top
    k frequent elements is unique.

-   You can return the answer in any order.


## **Solution-1:**

```JavaScript

var topKFrequentV1 = function(nums, k) {
    
    let arrResult = [];
    let arrDistinctNumbers = [...new Set(nums)];

    for(number of arrDistinctNumbers){
        let count = nums.filter(x => x === number).length;
        arrResult.push({ "number":number, "count": count } );
    }

    arrResult.sort((a,b) => b.count - a.count);
    return arrResult.slice(0,k).map(x=> x.number);
};

```


## **Solution-2:**

```JavaScript

var topKFrequentV2 = function(nums, k) {

    let arrResult = [];
    let mapNums = new Map();
        
    for (let num of nums){
        mapNums.set(num, mapNums.get(num) + 1 || 1);
    }

    let arrSorted = Array.from(mapNums).sort((x, y) => y[1] - x[1]);

    for (let li = 0; li < k; li++) {
        const element = arrSorted[li][0];
        arrResult.push(element);
    }

    return arrResult;    
};

```

## **Test Data:**

```JavaScript

const test01 = [1,1,1,2,2,3,6,6,6,6,6];
const test02 = [1];
const result = topKFrequentV2(test01,2);
console.log(result);

```