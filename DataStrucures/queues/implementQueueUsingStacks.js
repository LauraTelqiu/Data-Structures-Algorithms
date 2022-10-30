// Implement Queue using Stacks

// Implement a first in first out(FIFO) queue using only two 
//stacks.The implemented queue should support all the functions 
//of a normal queue(push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue 
//and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, 
//false otherwise.


//Notes:
// You must use only standard operations of a stack, which means
// only push to top, peek / pop from top, size, and is empty 
//operations are valid.
// Depending on your language, the stack may not be supported 
// natively.You may simulate a stack using a list or 
//deque(double - ended queue) as long as you use only a stack's 
//standard operations.


// Example 1:

// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]

// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false


// Constraints:

// 1 <= x <= 9
// At most 100 calls will be made to push, pop, peek, and empty.
// All the calls to pop and peek are valid.


//Follow - up: Can you implement the queue such that each 
//operation is amortized O(1) time complexity ? In other words, 
//performing n operations will take overall O(n) time even if 
//one of those operations may take longer.


/*
  queue 1, 2                      
                           
    2                     1   
    1                     2 
push stack              pop stack

First we push the queue elenents into the push stack.
With queues is first in first out so we want to be able to take
out the first element first wihich is 1 in our case, and 
then 2,3,4. Now if pop stack is empty we can pop elements from
push stack one by one to the pop stack and we will get 1,2,3,4.
So first out now is 1 wich is what we want.
*/

class MyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }
  push(value) {
    this.pushStack.push(value);
    return this


  }
  pop() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
  }
  peek() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack[this.popStack.length - 1];
  }
  empty() {
    return !this.pushStack.length && !this.popStack.length

  }

}


const myQueue = new MyQueue();
console.log(myQueue.push(1)); // queue is: [1]
console.log(myQueue.push(2)); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.peek()); // return 1
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue.empty()); // return false


// const myQueue = new MyQueue()
// console.log(myQueue.push(1))
// console.log(myQueue.push(2))
// console.log(myQueue.push(3))
// console.log(myQueue.push(4))
// console.log(myQueue.pop())
// console.log(myQueue.pop())
// console.log(myQueue.pop())
// console.log(myQueue.pop())
// console.log(myQueue.peek())
// console.log(myQueue.empty())

// time complexity 
//worst case we are going to have linear but we're only doing that
//once, so our average time complexity is actually constant for our
// pop method 
//space is linear because as we add more input we're going to have
//to create more space