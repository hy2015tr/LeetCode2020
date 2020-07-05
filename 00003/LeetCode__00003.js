function lengthOfLongestSubstring(s) {
    
    let start = 0;
    let maxLen = 0;
    let mapTmp = new Map();
  
    for(var i = 0; i < s.length; i++) {
        let ch = s[i];
        let idx = mapTmp.get(ch);
        if(idx >= start) start = idx + 1;
        mapTmp.set(ch, i);
        if(i - start + 1 > maxLen) maxLen = i - start + 1;
    }
  
    return maxLen;
    
};

// Test Data
const test01 = "abcabcbb";
const test02 = "bbbbb";
const test03 = "pwwkew";
const result = lengthOfLongestSubstring(test01);
console.log(result);
