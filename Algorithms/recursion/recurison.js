// 1. Identify the base case
// 2. Identify the recursive case.So we've identified the 
//    base case when to stop the recursive case.That is when 
//    counter is less than three.
// 3. Get coloser and closer and retrun when needed.And that 
//usually you have two returns. One for the base case and one for
//the recursive case because you want to return something at the 
//end of the function.


let counter = 0;
function inception() {
  console.log(counter)
  //base case
  if (counter > 3) {
    return 'done'
  }
  counter++
  return inception()

}
console.log(inception())

// 1. Identify the base case
// 2. Identify the recursive case.So we've identified the 
//    base case when to stop the recursive case.That is when 
//    counter is less than three.
// 3. Get coloser and closer and retrun when needed.And that 
//usually you have two returns. One for the base case and one for
//the recursive case because you want to return something at the 
//end of the function.

