var firstUniqCharV1 = function (s) {
  
  for (li = 0; li < s.length; li++) {
    if (s.indexOf(s[li]) === s.lastIndexOf(s[li])) {
      return li;
    }
  }

  return -1;

};

var firstUniqCharV2 = function (s) {
  
  const countMap = new Map();

  for (x of s) {
    countMap.set(x, countMap.get(x) + 1 || 1);
  }

  for (x of s) {
    if (countMap.get(x) === 1) return s.indexOf(x);
  }

  return -1;

};


// Test Data
const test01 = "leetcode";
const test02 =  "loveleetcode";
const result = firstUniqCharV1(test01);
console.log(result);
