//10 -> 5 -> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null

//       }
//     }
//   }
// }

// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }

// class LinkedList {
//   constructor(value) {
//     const newNode = new Node(value)
//     this.head = newNode
//     this.tail = this.head
//     this.length = 1;
//   }
//   push(value) {
//     const newNode = new Node(value)
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;

//   }
//   pop(value) {
//     const newNode = new Node(value)
//     newNode.next = this.head
//     this.head = newNode
//     this.length++
//     return this

//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  push(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    /*
    check if index is greater than or equal to this.length.So if 
    In this case, I'm saying as long as the index is greater or 
    equal to list lsength then in that case, just add it to the 
    end of the list.So if I say insert 200 value of 99, I'm just 
    going to add the 99 to the end of the list.
  
    */
    if (index >= this.length) {
      return this.push(value)
    }
    const newNode = new Node(value);
    //     // index-1 is the index that will point to the new node
    //     // So if I want to insert the number 99 in here, I have to
    //     //  make sure that ten points to 99.And 99 points to five.
    //     //10 -> 5 -> 16 ----> 10-> 99 -> 5-> 16

    const leader = this.lookUpIndex(index - 1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
    return this
  }
  lookUpIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    //     //while the counter doesn't equal the index
    //     // keep going through the while loop as long as the counter
    //     // doesn't equal the index, but as soon as the counter becomes
    //     // the index, we reach the point that we want in our
    //     //case traverse to index minus one, that means as soon as
    //     //we get to ten, then stop.
    while (counter !== index) {
      //       //But until then, I want you to traverse through this.
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    const leader = this.lookUpIndex(index - 1)

  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.push(5);
myLinkedList.push(16);
myLinkedList.pop(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.remove(2);
myLinkedList.reverse();

console.log(myLinkedList.printList());





