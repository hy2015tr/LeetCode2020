var findDuplicate = function(nums) {
    
    let mySet= new Set();
    
    for(let li=0; li<nums.length; li++){
        let x = nums[li];
        if (mySet.has(x)) return x; else mySet.add(x);
    }
       
};


// Test Data
const test01 = [1,3,4,2,2];
const test02 = [3,1,3,4,2];
const result = findDuplicate(test01);
console.log(result);