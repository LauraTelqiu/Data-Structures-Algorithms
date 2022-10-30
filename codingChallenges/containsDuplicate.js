// Given an integer array nums, return true if any value appears at least twice
//in the array, and return false if every element is distinct.

//   Example 1:

// Input: nums = [1, 2, 3, 1]
// Output: true
// Example 2:

// Input: nums = [1, 2, 3, 4]
// Output: false
// Example 3:

// Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
// Output: true


// Constraints:
// 1 <= nums.length <= 105
//   - 109 <= nums[i] <= 109


/*A Set is a collection of unique values.To remove duplicates from an array:
First, convert an array of duplicates to a Set.The new Set will implicitly 
remove duplicate elements.
Then, convert the set back to an array.
  */


// new Set it's going to get rid of duplicates and make the array
// distinct(uniqe, no duplicates)
// if array of nums is equal to myset than there are no dupicates and return false
// else there is duplicates and retrun true

//if my set or the size of my set is the same size as my array 
//then we will know that every value within that array is
//distinct(no duplicates) so we will return false


function containsDupicates(nums) {
  let mySet = new Set(nums);
  // console.log(mySet)
  if (nums.length === mySet.size) {
    return false
  } else {
    return true;
  }






}







console.log(containsDupicates([1, 2, 3, 1]));
console.log(containsDupicates([1, 2, 3, 4]));
console.log(containsDupicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));