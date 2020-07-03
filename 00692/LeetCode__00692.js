var topKFrequentV1 = function (words, k) {

  let arrTemp = [];
  let arrDistinctWords = [...new Set(words)];
  
  for (word of arrDistinctWords) {
    let countOfWord = words.filter(p => p === word).length;
    arrTemp.push({ "name": word, "count": countOfWord });
  }

  let arrNewList = [];
  for (let li = 0; li < k; li++) {
    arrNewList.push(arrTemp[li].name);
  }
  
  return arrNewList;

};


var topKFrequentV2 = function (words, k) {

  let arrTemp = [];
  let arrDistinctWords = [...new Set(words)];
   
  for (word of arrDistinctWords) {
    let countOfWord = words.filter(p => p === word).length;
    arrTemp.push({ "name": word, "count": countOfWord });
  }
  
  arrTemp.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  
  return arrTemp.slice(0,k).map(x => x.name);

};
  

// Test Data
const test01 = ["i", "love", "leetcode", "i", "love", "coding"];
const test02 = [ "xerox", "day", "sunny", "is", "the", "the", "the", "the", "sunny", "is", "is" ];
const result = topKFrequentV2(test01, 2);
console.log(result);