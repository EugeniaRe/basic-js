// class DepthCalculator {

//   calculateDepth(arr) {

//     let count = 1;
//     if (Array.isArray(arr)) {
//       count++
//       for (let i = 0; i < arr.length; i++) {
//         calculateDepth(arr[i]);
//       }
//     }
//     return count;
//   }
// }


let count = 0;
function calculateDepth(arr) {

  if (Array.isArray(arr)) {
    count++
    for (let i = 0; i < arr.length; i++) {
      calculateDepth(arr[i]);
    }
  }
  return count;
}



// let count = 0;
// function calculateDepth(arr) {


//   if (Array.isArray(arr)) {
//     count++
//     for (let i = 0; i < arr.length; i++) {
//       calculateDepth(arr[i]);
//     }
//   }
//   return count;
// }


console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));

//const depthCalc = new DepthCalculator();
//console.log(depthCalc.calculateDepth([[[]]]))
// depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
// depthCalc.calculateDepth([[[]]]) => 3


//console.log(getDNSStats(['epam.com', 'info.epam.com']));