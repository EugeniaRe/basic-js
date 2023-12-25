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





console.log(getCommonCharacterCount('aabcc', 'adcaa'));



















// function renameFiles(names) {
//   const resultArray = [];
//   let alreadyExist = false;
//   for(let i = 0; i<names.length; i++){

//     resultArray.push(names[i]);

//     for( let j = 0; j< resultArray.length; j++){
//       if(resultArray[j] === names[i])
//       alreadyExist = true;
//     }
//     if(alreadyExist){
//       resultArray.pop();
//       i--;
//     }

//   }
//   return resultArray;
// }

// console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']));








/*
 assert.deepEqual(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']), ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']);
    assert.deepEqual(renameFiles(['a', 'b', 'cd', 'b ', 'a(3)']), ['a', 'b', 'cd', 'b ', 'a(3)']);
    assert.deepEqual(renameFiles([]), []);
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