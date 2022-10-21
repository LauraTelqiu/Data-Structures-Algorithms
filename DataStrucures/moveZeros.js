/*Given an integer array nums, move all 0's to the end of it while maintaining
the relative order of the non-zero elements.

Note that you must do this in -place without making a copy of the array.

Example 1:

Input: nums = [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
Example 2:

Input: nums = [0]
Output: [0]

Constraints:

1 <= nums.length <= 104
- 231 <= nums[i] <= 231 - 1
*/

// move all O to the end
// maintain the relative oreder of the non-zero elements
// without making a copy of the array
/*
Use one pointer and we wil point to the begining of the array, we call this pointer let's say index
and then if we meet non-zero element then we prefrom the swap. Let say we do 1 and 0 it's so we gonna
keep going and then finally hit 1 so it's non-zero element we prefrom the swap and then we move index
element it basically will point where the next non-zero element supposed to go. The next iteration we have
0 again we skip then we have 3 so we swap 3 with 0 and then we move index a little more where the next
element will go.Zero we switch we don't do anything and then we find it with 12 then put zero here and 
then we move I so we end up with 1, 3, 12, 0, 0 excatly what the problem is askeing.

*/
//STEPS
// Create index element put it point to 0;
// For loop
//if the current element I is non zero element then we will make a swap
// and then we make a swap with temp variable that eqauls nums index and then nums index will equal
//to nums[i], and then nums[i] will equal to temp.

// When we prefrom the swap we will have to move the i index so index ++ so we move the pointer
// at the end we have to simply retrun our nums array.

// function moveZeros() {
//   let index = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       let temp = nums[index];

//       nums[index] = nums[i];

//       nums[i] = temp;
//       index++;
//     }
//   }
//   return nums;
// }


// console.log(moveZeros(nums = [0, 1, 0, 3, 12]))


function moveZeros(nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i]
      nums[i] = nums[index]
      nums[index] = temp
      index++
    }


  }
  return nums;
}

console.log(moveZeros(nums = [0, 1, 0, 3, 12]))