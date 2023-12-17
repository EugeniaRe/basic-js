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



console.log(minesweeper([
  [false, false, false],
  [false, false, false],
]));

/*
arrNumbers.sort(function (a, b) {
    return a - b
  });
*/


// function minesweeper(matrix) {
//   let resArray = [];
//   for (let i = 1; i < matrix.length - 1; i++) {
//     let subArray = [];
//     for (let j = 1; j < matrix[i].length - 1; j++) {
//       let resEl = 0;
//       for (let k = i-1; k<=i+1; k++){
//         for(let l = j-1; l<=j+1; k++){

//         }
//       }


//     }
//   }
// }

/*

function minesweeper(matrix) {
  let resArray = [];
  for (i = 0; i < matrix.length; i++) {
    let subArray = [];
    for (j = 0; j < matrix[i].length; j++) {
      let resEl = 0;
      for()
      /*
      if (matrix[i][j] === true) {
        resEl++;
      }
      if (i > 0) {
        if (matrix[i - 1][j] === true) {
          resEl++;
        }
      }
      if (i < matrix.length - 1) {
        if (matrix[i + 1][j] === true) {
          resEl++;
        }
      }
      if (j > 0) {
        if (matrix[i][j - 1] === true) {
          resEl++;
        }
      }
      if (j < matrix[i].length - 1) {
        if (matrix[i][j + 1] === true) {
          resEl++;
        }
      }

      console.log(resEl);
    }
  }
  /*
    matrix.forEach((element, index) => {
      let subArray = [];
      element.forEach((subElement, subindex) => {
        let resEl = 0;
        if(subElement === true)
        resEl++;
        if(element[subindex-1] === true)
        resEl++;
        if(element[subindex+1] === true)
        resEl++;
        /*if(subElement === true)
        resEl++;
        if(subElement === true)
        resEl++;
      console.log(resEl);
      })
    });
}

console.log(minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]));

/*

    [
        [1, 2, 1],
        [2, 1, 1],
        [1, 1, 1],
      ],












 assert.strictEqual(isMAC48Address('00-1B-63-84-45-E6'), true);
    assert.strictEqual(isMAC48Address('Z1-1B-63-84-45-E6'), false);
    assert.strictEqual(isMAC48Address('not a MAC-48 address'), false);
    assert.strictEqual(isMAC48Address('FF-FF-FF-FF-FF-FF'), true);
    assert.strictEqual(isMAC48Address('G0-00-00-00-00-00'), false);*/


// /* countCats([
// *  [0, 1, '^^'],
// *  [0, '^^', 2],
// *  ['^^', 1, 2]
// * ]) => 3`
// *
// */
// matrix = [
//   [0, 1, '^^'],
//   [0, '^^', 2],
//   ['^^', 1, 2]
// ]
// //console.log(matrix[1]);
// function getCommonCharacterCount(s1, s2) {
//   const sortStr1 = s1.split('').sort().join('');
//   const sortStr2 = s2.split('').sort().join('');
//   count = 0;
//   if (s1.length === 0 || s2.length === 0) {
//     return 0;
//   }

//   if (sortStr1.length <= sortStr2.length) {
//     for (let i = 0; i < sortStr1.length; i++) {
//   const sortStr1 = s1.split('').sort().join('');


//       if (sortStr2.substring(count).includes(sortStr1[i])) {
//         console.log(sortStr1[i]);
//         console.log(sortStr2.substring(count));
//         count++;
//       }
//     }
//   } else {
//     for (let i = 0; i < sortStr2.length; i++) {
//       if (sortStr1.substring(count).includes(sortStr2[i])) {
//         count++;
//       }
//     }
//   }

//   return count;
// }

// console.log(getCommonCharacterCount('aabcc', 'adcaa'));

