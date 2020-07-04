var twoSumV1 = function (nums, target) {

    const mapHash = new Map();

    for (let i = 0; i < nums.length; i++) {
        
        if (mapHash.has(nums[i])) {
            return [mapHash.get(nums[i]), i];
        }

        mapHash.set(target - nums[i], i);

    }
};


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


// Test Data
const test01 = [2, 7, 11, 15];
const result = twoSumV1(test01, 9);
console.log(result);