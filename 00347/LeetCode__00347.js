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


// Test Data
const test01 = [1,1,1,2,2,3,6,6,6,6,6];
const test02 = [1];
const result = topKFrequentV2(test01,2);
console.log(result);