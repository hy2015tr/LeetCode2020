var maxSubArray = function(nums) {

    let sum = Number.MIN_SAFE_INTEGER;
    let max = nums[0];
 
    for (var i = 0; i < nums.length; i++) {
      sum = Math.max(sum + nums[i], nums[i]);
      max = Math.max(max, sum);
    }

    return max;    
   
};


// Test Data
const test01 = [-2,1,-3,4,-1,2,1,-5,4];
const result = maxSubArray(test01);
console.log(result);