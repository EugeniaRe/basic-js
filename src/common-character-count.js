const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const charArray = [];
  for (let i = 0; i < s1.length; i++) {
    let isIclude = false;
    charArray.forEach(el => {
      if (s1[i] === el) {
        isIclude = true;
      }
    })
    if (!isIclude) {
      charArray.push(s1[i]);
    }
  }
  for (let i = 0; i < s2.length; i++) {
    let isIclude = false;
    charArray.forEach(el => {
      if (s2[i] === el) {
        isIclude = true;
      }
    })
    if (!isIclude) {
      charArray.push(s2[i]);
    }
  }

  let result = 0;
  charArray.forEach(el => {
    let s1Count = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] === el) {
        s1Count++;
      }
    }
    let s2Count = 0;
    for (let i = 0; i < s2.length; i++) {
      if (s2[i] === el) {
        s2Count++;
      }
    }
    if(s1Count<s2Count){
      result+=s1Count;
    }else{
      result+= s2Count;
    }
  })
  return result;
}

module.exports = {
  getCommonCharacterCount
};
