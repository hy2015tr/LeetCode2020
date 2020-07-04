var singleNumber = function(nums) {
    
    let mySet = new Set();
    
    for(let li=0; li<nums.length; li++){
        let x = nums[li];
        mySet.has(x) ? mySet.delete(x) : mySet.add(x);
    }
    
    return [...mySet][0];
    
};


// Test Data
const test01 = [2,2,1];
const test02 = [4,1,2,1,2];
const result = singleNumber(test02);
console.log(result);