/*
Given an array, rotate the array to the right by k steps, where k is non - negative.
Example 1:

Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
Output: [5, 6, 7, 1, 2, 3, 4]
Explanation:
rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6]
rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5]
rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]
Example 2:

Input: nums = [-1, -100, 3, 99], k = 2
Output: [3, 99, -1, -100]
Explanation: 
rotate 1 steps to the right: [99, -1, -100, 3]
rotate 2 steps to the right: [3, 99, -1, -100]

Constraints:
1 <= nums.length <= 105
  - 231 <= nums[i] <= 231 - 1
0 <= k <= 105
*/

/*
We know that we want to take something off of the end of
the array and then put it on the front, and we know we want to do
  that(k) times.

    This solution puts that exact direction into code.We run a for loop(k)
times, on each pass pop() - ing off the last element of the array and
giving it as an argument to unshift() it onto the front of the array.
Then we return the array at the end.

The runtime complexity here is O(n * k), as each time we use unshift()
JavaScript is re - seating each element in the array under the hood.

The space complexity is O(1), or constant space, since we're modifying
the original array in -place.
  */

function rotateArray(nums, k) {

  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }

  return nums;
}

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(rotateArray([-1, -100, 3, 99], 2))

/*
If you visualize the array being rotated, you'll notice a pattern:
  nums = [1, 2, 3, 4, 5]

  k = 2
=> [4, 5, 1, 2, 3]

  // original array reversed
  [5, 4, 3, 2, 1]

  // reverse just the first (k) elements
  [4, 5, 3, 2, 1]
  [1,2,3]

  // see where we're going?

  // reverse from (k) to the end
  [4, 5, 1, 2, 3]


And you've got the rotated result!
What we're doing is establishing a helper function that takes in an array, a start index and an end index, 
and then uses ES6 syntax to swap the array[start] and array[end] elements before incrementing and decrementing the pointers.

Based off of our example above, we know we need to call this function three times:

Once to reverse the entire array.
Once to reverse from nums[0] to k.
Once to reverse from k to the end.
And we're done!

The runtime complexity here is O(n * 3), since we still need to reverse each element at least once, 
and we'll be doing that three times.

The space complexity here is, again, a constant O(1). Still great!
*/
function rotateArray2(nums, k) {

  // reverse helper function
  function reverse(arr, start, end) {
    //while start is less than end we want to swap the values and reverse it
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  // mod K because if k is larger than the length of nums that's is going to
  // keep on cycling
  k %= nums.length;


  //reverse the entire array.
  reverse(nums, 0, (nums.length - 1));
  //reverse from nums[0] to k.
  reverse(nums, 0, (k - 1));
  //reverse from k to the end.
  reverse(nums, k, (nums.length - 1));

  return nums;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotateArray([-1, -100, 3, 99], 2))


