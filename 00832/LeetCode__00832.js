var flipAndInvertImage = function(arr) {
    let result = [];
    for (let row of arr) {
      let reversedRow = row.reverse();
      let invertedRow = reversedRow.map(p => 1 - p);
      result.push(invertedRow);
    }
    return result;    
  };

  // Test Data
const test01 = [[1,1,0],[1,0,1],[0,0,0]];
const test02 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];
const result = flipAndInvertImage(test01);
console.log(result);
