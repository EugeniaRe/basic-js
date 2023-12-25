const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {
    return '';
  }
  let resultStr = '';
  let count = 1;
  for (let i = str.length - 1; i >= 1; i--) {

    if (str[i] === str[i - 1]) {
      count++;
    } else {
      if (count === 1) {
        resultStr += str[i];
      } else {
        resultStr += str[i] + count;
      }
      count = 1;
    }
    console.log(count);
  }

  resultStr += str[0];

  if (count !== 1) {
    resultStr += count;
  }

  return resultStr.split('').reverse().join('');
}

module.exports = {
  encodeLine
};
