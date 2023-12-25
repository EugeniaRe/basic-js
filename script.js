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

  if(count !==1){
    resultStr += count;
  }

  return resultStr.split('').reverse().join('');
  }


console.log(encodeLine('a2b2ca'));


//a2b2ca'

/*
('aaaatttt'), '4a4t');
    assert.strictEqual(encodeLine('aabbccc'), '2a2b3c');
    assert.strictEqual(encodeLine('abbcca'), 'a2b2ca');
    assert.strictEqual(encodeLine('xyz'), 'xyz');
    assert.strictEqual(encodeLine(''), '');
*/

// function encodeLine(str) {
//   const charArray = [];
//   for (let i = 0; i < str.length; i++) {
//     let isUnclude = false;
//     charArray.forEach(el => {
//       if (el === str[i])
//         isUnclude = true;
//     })
//     if (!isUnclude) {
//       charArray.push(str[i]);
//     }
//   }

//   let resultStr = '';
//   charArray.forEach(el =>{
//     let charCount = 0;
//     for (let i = 0; i < str.length; i++) {
//       if(el === str[i]){
//         charCount++;
//       }
//     }
//     if(charCount === 1){
//       resultStr+= el;
//     }else{
//     resultStr+= charCount+el;
//     }
//   })

//   return resultStr;
// }








/*
 assert.equal(dateSample('9000'), false);
      assert.equal(dateSample('15.1'), false);
      assert.equal(dateSample('0'), false);
      assert.equal(dateSample('-5'), false);
      assert.equal(dateSample('-55.8'), false);
*/

//let date = new Date(2019, 11, 22, 23, 45, 11, 500)

//let date = new Date('lol');
//let date = 8;
//console.log(isNaN(date));
// try{
//   console.log(date.getMonth());
// } catch(e){
//   throw new Error('Invalid date!');
// }
//console.log(date.getMonth());

// if (!(date instanceof Date)) {
//   throw new Error('Invalid date!');
// }
// console.log(date);
// let count = 0;
// function calculateDepth(arr) {


//     if (Array.isArray(arr)) {
//       count++
//       for (let i = 0; i < arr.length; i++) {
//         return calculateDepth(arr[i].flat());
//       }
//     } else{
//       let maxDepth = count;
//       return maxDepth;
//     }

//   }

// let count = 1;
// //let currentCount = 1;
// function calculateDepth(arr) {

// for (let i = 0; i < arr.length; i++) {
//    if (Array.isArray(arr[i])) {
//     count ++;
//     currentCount++;
//     console.log(currentCount);
//     // if(currentCount> count){
//     //   count = currentCount;
//     // }
//     calculateDepth(arr[i]);
//   }else{
// currentCount =1;
// }
// }

//   return count;
// }



// let count = 0;

// let depth = 0;
// let maxDepth = 0;
// function calculateDepth(arr) {

//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       depth++;
//       console.log(depth);
//       return calculateDepth(arr[i].flat());
//       // let res = calculateDepth(arr[i])
//       // console.log(res);
//       // newArray = newArray.concat(res);
//     } else {
//       return depth;
//     }
//   }
//   //return newArray;
// }



// function calculateDepth(arr) {

//   let depth = 0;
//   let maxDepth = 0;
//   function RecursionDepth(arr, depth){
//   if (Array.isArray(arr)) {
//     depth++;
//     console.log(depth);
//     for (let i = 0; i < arr.length; i++) {
//       RecursionDepth(arr[i], depth);
//     }
//   }
//   if(maxDepth< depth){
//     maxDepth = depth;
//   }
//   return maxDepth;
// }
// return RecursionDepth(arr, 0);
// }

// let depth = 0;
//     let maxDepth = 0;
// function calculateDepth(arr) {

//     if (Array.isArray(arr)) {
//       depth++;
//       console.log(depth);
//       for (let i = 0; i < arr.length; i++) {
//         calculateDepth(arr[i], depth);
//       }


//     }else{
//       return calculateDepth(arr, 0);
//     }
//     if(maxDepth< depth){
//       maxDepth = depth;
//     }
//     return maxDepth;

//   //return RecursionDepth(arr, 0);
//   }

//console.log(calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]));

//console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));

//console.log(calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));

//const depthCalc = new DepthCalculator();
//console.log(depthCalc.calculateDepth([[[]]]))
// depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
// depthCalc.calculateDepth([[[]]]) => 3


//console.log(getDNSStats(['epam.com', 'info.epam.com']));

/*

([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 31);
([1, 2, 3, 4, 5, [1]]), 2);
([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 5);
([1, 2, 3, [8, [2]], 4, 5, []]), 3);
([1, 2, 3, [1], 4, 5, [1]]), 2);



class DepthCalculator {
  depth = 1

  calculateDepth(arr) {
    if (!arr.some(a => Array.isArray(a))) {
      let finalDepth = this.depth
      this.depth = 1
      return finalDepth
} else {
  arr = arr.flat()
  this.depth = +this.depth + 1
  return this.calculateDepth(arr)
}
  }
}


*/