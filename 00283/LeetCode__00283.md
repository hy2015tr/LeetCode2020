## **283 - Move Zeroes [E]**

Given an array nums, write a function to move all 0's to the end of it while
maintaining the relative order of the non-zero elements.

**Example:**

    Input: [0,1,0,3,12]

    Output: [1,3,12,0,0]

**Note**:

1.  You must do this **in-place** without making a copy of the array.
2.  Minimize the total number of operations.

## **Solution:**

```JavaScript

var moveZeroes = function(nums) {

    if (nums.length ===1 ) return nums;
    if (nums.length ===2 && nums[1] ===0) return nums;

    let count = 0;
    let pointer = 0;
    let countOfZeros = nums.filter(x => x ===0).length;

    if (countOfZeros === nums.length) return nums;

    do {
        if (nums[pointer] === 0) {
            nums.splice(pointer, 1);
            nums.push(0);
            count++;
        }
        if (nums[pointer] !== 0) pointer++;
    }
    while(count < countOfZeros);

    return nums;
    
};

```


## **Test Data:**

```JavaScript

// Test Data
const test01 = [0,1,0,3,12];
const result = moveZeroes(test01);
console.log(result);

```