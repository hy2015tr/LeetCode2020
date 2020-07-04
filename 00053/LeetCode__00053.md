# **53 - Maximum Subarray [E]**

Given an integer array nums, find the contiguous subarray (containing at least
one number) which has the largest sum and return its sum.

**Example:**

**Input:** [-2,1,-3,4,-1,2,1,-5,4],

**Output:** 6

**Explanation:** [4,-1,2,1] has the largest sum = 6.

**Follow up:**

If you have figured out the O(*n*) solution, try coding another solution using
the divide and conquer approach, which is more subtle.


## **Solution:**

```JavaScript

var maxSubArray = function(nums) {

    let sum = Number.MIN_SAFE_INTEGER;
    let max = nums[0];
 
    for (var i = 0; i < nums.length; i++) {
      sum = Math.max(sum + nums[i], nums[i]);
      max = Math.max(max, sum);
    }

    return max;    
   
};

```


## **Test Data:**

```JavaScript

// Test Data
const test01 = [-2,1,-3,4,-1,2,1,-5,4];
const result = maxSubArray(test01);
console.log(result);

```