/* // Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.
*/

// 2 parameters - arrays - no size limit
// return true or false
// O(n^2)

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];

// function containgsCommonItmes(arr1, arr2) {

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;

//       } else {
//         return false;
//       }
//     }
//   }

// }

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'l'];

function containgsCommonItmes2(arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    /*
    check whether a map exists (map.a exists,  map.b exists, 
    map.cexists, map dot.x exists.) if dosen't exist If(!map )
    If it doesn't exist, then we're going to add it.
    const item equals array1 one[i].So that is a. And this item is 
    going to have map item equal to true.
    */


    if (!map[array1[i]]) {
      const item = array1[i];
      map[item] = true;

    }
  }
  /*
  loop through first array and create object where 
  properties === items in the array
  loop through second array and check if item in second 
  array exists on created object.
  */
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }

  }
  return false;
}
// console.log(containgsCommonItmes2(array1, array2))

function containgsCommonItmes3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))

}
console.log(containgsCommonItmes3(array1, array2))

