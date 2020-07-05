var ladderLength = function (beginWord, endWord, wordList) {
  
    if (!wordList.includes(endWord)) return 0;

    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const wordSet = new Set(wordList);
    const len = beginWord.length;

    let beque = new Set([beginWord]);
    let enque = new Set([endWord]);
    let level = 1;

    while (beque.size && enque.size) {
    
        for (const e of beque) {
            if (enque.has(e)) return level;
        }

        let queue = new Set();
        
        beque.forEach((w) => wordSet.delete(w));

        for (const item of beque) {
            for (let i = 0; i < len; i++) {
                for (const char of alphabets) {
                    const v = item.substring(0, i) + char + item.substring(i + 1);
                    if (wordSet.has(v)) queue.add(v);
                }
            }
        }
        
        beque = queue;
        
        if (beque.size > enque.size) [beque, enque] = [enque, beque];
        
        level++;
  
    }
  
    return 0;

};

// Test Data
const test01_beginWord = "hit";
const test01_endWord = "cog";
const test01_wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
const test02_beginWord = "hit";
const test02_endWord = "cog";
const test02_wordList = ["hot", "dot", "dog", "lot", "log"];
const result = ladderLength(test01_beginWord, test01_endWord, test01_wordList);
console.log(result);