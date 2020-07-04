var uniqueMorseRepresentations = function(words) {

    const alphabet = {
      a: ".-",
      b: "-...",
      c: "-.-.",
      d: "-..",
      e: ".",
      f: "..-.",
      g: "--.",
      h: "....",
      i: "..",
      j: ".---",
      k: "-.-",
      l: ".-..",
      m: "--",
      n: "-.",
      o: "---",
      p: ".--.",
      q: "--.-",
      r: ".-.",
      s: "...",
      t: "-",
      u: "..-",
      v: "...-",
      w: ".--",
      x: "-..-",
      y: "-.--",
      z: "--.."
    };
  
    let result = [];
    for (let word of words) {
      let morseWord = "";
      for (letter of word) morseWord += alphabet[letter];
      result.push(morseWord);
    }
    return [...new Set(result)].length;
  };


  
// Test Data
const test01 = ["gin", "zen", "gig", "msg"];
const result = uniqueMorseRepresentations(test01);
console.log(result);

