const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let element = 0;
      let rowStart = i - 1;
      let rowEnd = i + 1;
      let colStart = j - 1;
      let colEnd = j + 1
      if (i < 1) {
        rowStart = i;
      }
      if (i === matrix.length - 1) {
        rowEnd = matrix.length - 1;
      }
      if (j < 1) {
        colStart = j;
      }
      if (j === matrix.length - 1) {
        colEnd = matrix.length - 1;
      }

      for (let k = rowStart; k <= rowEnd; k++) {

        for (let n = colStart; n <= colEnd; n++) {
          if (matrix[i][j] === false) {
            if (matrix[k][n] === true) {
              element++;

            }
          } else {
            if (matrix[k][n] === true && k !== i && n !== j) {
              element++;
            }
          }
        }
      }
      row.push(element);
    }
    result.push(row);
  }
  return result;
}

module.exports = {
  minesweeper
};
