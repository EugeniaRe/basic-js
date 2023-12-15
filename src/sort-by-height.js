const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const tempArr = [];
  arr.forEach(element => {
    if (element !== -1) {
      tempArr.push(element);
    }
  });
  tempArr.sort(function (a, b) {
    return a - b;
  });
  const resultArr = [];
  let i = 0;
  arr.forEach(element => {
    if (element === -1) {
      resultArr.push(element);
    } else {
      resultArr.push(tempArr[i]);
      i++;
    }
  })
  return resultArr;
}

module.exports = {
  sortByHeight
};
