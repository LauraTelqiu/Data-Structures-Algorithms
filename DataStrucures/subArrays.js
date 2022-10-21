
// maxSubArray = function (nums) {
//   let maxSum = nums[0];
//   let currentSum = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     currentSum = Math.max(currentSum + nums[i], nums[i])
//     maxSum = Math.max(currentSum, maxSum)


//   }
//   return maxSum;
// }
// Given an integer array nums, find the contiguous subarray(containing at least one number)
// which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.
// Example 1:

// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5, 4, -1, 7, 8]

// Output: 23

// Constraints:

// 1 <= nums.length <= 105
//   - 104 <= nums[i] <= 104




// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//current sum will need to be maximum  of current sum + number or by itself
// max sum - calculate wich one is larger curent sum or max sum
// what is larger one plus (-2 + 1 = -1) < 1;
// (1-3 = -2) > -3 .....
//cur = -2 , 1, -2, 4, 3, 5, 6, 1, 5
// max = -2, 1, 4, 5, 6


//compare current number on a array , to see if the sum is larger that the number itself
//compare maxSum whch number is the largerst
//  is -2 + 1 > 1 --> -1 < 1, 1 is larger so we keep 1
//  is -3 + 1 larger than - 3 ---> -2 > -3 so we keep -2.Because - 2 is smaller than max 1 it doesen't add on max values.
//  is 4-3 > 4 ---> No se wee keep 4. Is 1> 4 no, so we add 4 to max etc
//cur = -2, 1, -2, 4, 3, 5, 6, 1, 5
//max = -2, 1,  4, 5, 6


function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {

    currentSum = Math.max(currentSum + nums[i], nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}






console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]))
console.log(maxSubArray([5, 4, -1, 7, 8]))