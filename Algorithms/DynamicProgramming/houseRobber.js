/*
You are a professional robber planning to rob houses along a 
street. Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them 
is that adjacent houses have security systems connected and 
it will automatically contact the police if two adjacent houses 
were broken into on the same night.

Given an integer array nums representing the amount of 
money of each house, return the maximum amount of money 
you can rob tonight without alerting the police.



Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 
(money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 
(money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 400
*/
/*
given an array that represnets houses with values. If you were to 
start robbing a particular house you can't rob the one that's next
because it will allert the police, so what you could do is start
robbing the first one and skip the seconde one, and go this 
pattern unitl you reach the end or  skip the first one and go to 
the second elemnt and rob the second and then skip the third and 
rob the fourth and so on.We need to dermine the best pattern to 
rob to get the max amount of money.In our example [2,7,9,3,1] if 
you start with the first house we get 2+9+1 = 12. And if we start
with the second house we get 7+3 =10.In the questio it asks us to 
retrun back the maximum money you can rob, it dosen't ask which 
once which house and which index you should rob. All it asks is 
what is the maximum money. By knowing this you don't need to keep
track of positon of where you start robbing houses all you need 
to do is keep track of the actual value. What can we do in here 
that can help us to solve this quesiton. If i go and check every 
elemnt does does it actually tell me something, maybe i could start
things that happend before to hepl solve the problem moving 
forward, maybe we can start using the logic about dynamic 
programming,to help solve this problem. As we iterate through the
each elemnt i know that i can either start from house number 1 or
house number 2 and the third positon is checking if i start 
from 

*/
//[2,7,9,3,1]
function robHouses(nums) {
  //edge points
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    nums[i] =
      Math.max(nums[i - 2] + nums[i], (nums[i - 3] || 0) + nums[i]);
  }
  return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
}
console.log(robHouses([1, 2, 3, 1]));
console.log(robHouses([2, 7, 9, 3, 1]));


/*

 for (let i = 2; i < nums.length; i++) {
    nums[i] =
      Math.max(nums[i - 2] + nums[i], (nums[i - 3] || 0) + nums[i]);

  }
  return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
}
explenation
[2,7,9,3,1]
nums[i - 2] + nums[i] 
    2       +    9 = 11

(nums[i - 3] || 0) + nums[i])
                0  +  9 = 9
                max =11

next iteration 
3+7 = 10 , 3+2= 5 max = 10 and so on
  


*/