/*
  queue 1, 2, 3, 4
    4                       1
    3                       2 
    2                       3  
    1                       4
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
    return !this.pushStack.length

  }

}





const myQueue = new MyQueue()
console.log(myQueue.push(1))
console.log(myQueue.push(2))
console.log(myQueue.push(3))
console.log(myQueue.push(4))
console.log(myQueue.pop())
console.log(myQueue.pop())
console.log(myQueue.pop())
console.log(myQueue.pop())
console.log(myQueue.peek())
console.log(myQueue.empty())

