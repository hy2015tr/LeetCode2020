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


// Test Data
const test01 = [0,1,0,3,12];
const result = moveZeroes(test01);
console.log(result);
