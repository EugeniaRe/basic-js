function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      resultArr.push(arr[i]);
      i += 2;
    }
    if (arr[i] === '--discard-prev') {
      resultArr.pop();
      resultArr.push(arr[i]);
    }
    if (arr[i] === '--double-prev') {
      resultArr.push(resultArr[resultArr.length - 1]);
      resultArr.push(arr[i]);
    }
    if (arr[i] === '--double-next') {
      resultArr.push(arr[i+1]);
      resultArr.push(arr[i+1]);
      i++;
    }
    else {
      resultArr.push(arr[i]);
    }
  }
  const resultDigitArr = []
  resultArr.forEach(el => {
    if (el !== '--discard-next' && el !=='--discard-prev' && el !== '--double-prev' && el !== '--double-next' && el !== undefined) {
      resultDigitArr.push(el);
    }
  })
  return resultDigitArr;
}



console.log(transform('str'));

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

