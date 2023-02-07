/*
Write two functions that finds the factorial of any number. 
One should use recursive, the other should just use a for loop
*/

//factorial 5! = 5 * 4 * 3 * 2 * 1
//          5! = 5 * 4!
//          5! = 5 * 4 * 3!

// 1. Identify the base case
// 2. Identify the recursive case.So we've identified the
//    base case when to stop the recursive case.That is when
//    counter is less than three.
// 3. Get coloser and closer and retrun when needed.And that
//usually you have two returns. One for the base case and one for
//the recursive case because you want to return something at the
//end of the function.

function findFactorialRecursive(number) {//O(n)

  return number * findFactorialIterative(number - 1)
}

function findFactorialIterative(number) {//O(n)
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

console.log(findFactorialRecursive(5))
console.log(findFactorialIterative(5));
