/*
Given collection of numbers and a sum find the matching pair that 
is equal  to a sum [1,2,3,9], sum = 8 --> No
         [1,2,4,4], sum = 8 --> yes 4+4
You can't repeat the same element at the same index twice but
the same number may occur twice  
*/


// Naive

// function hasPairWithSum(arr, sum) {
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === sum) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 9))


Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true
    }
    mySet.add(sum - arr[i])
    console.log(mySet)

  }
  return false;
}

console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9))

function hasPairWithSum3(arr, sum) {


}




console.log(hasPairWithSum3([6, 4, 3, 2, 1, 7], 9))



