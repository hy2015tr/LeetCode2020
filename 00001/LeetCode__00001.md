# **1 - Two Sum [E]**

Given an array of integers, return **indices** of the two numbers such that they
add up to a specific target.

You may assume that each input would have *exactly* one solution, and you may
not use the *same* element twice.

**Example:**

    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,

    return [0, 1]


## **Solution-1:**

```JavaScript

var twoSumV1 = function (nums, target) {

    const mapHash = new Map();

    for (let i = 0; i < nums.length; i++) {
        
        if (mapHash.has(nums[i])) {
            return [mapHash.get(nums[i]), i];
        }

        mapHash.set(target - nums[i], i);

    }
};

```

## **Solution-2:**

```JavaScript

var twoSumV2 = function (nums, target) {
  
    const hashTable = {};

    for (let i = 0; i < nums.length; i++) {
       
        const difference = target - nums[i];

        if (difference in hashTable) {
            return [hashTable[difference], i];
        }

        hashTable[nums[i]] = i;
    }
};

```


## **Test Data:**

```JavaScript

// Test Data
const test01 = [2, 7, 11, 15];
const result = twoSumV1(test01, 9);
console.log(result);

```