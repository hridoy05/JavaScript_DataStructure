class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    console.log(this.head.next);
    return this;
  }
}
var list = new SinglyLinkedList();
list.push("hello");
console.log(list);
list.push("GoodBye");
console.log(list);
list.push("99");
console.log(list);
list.push("bye");
console.log(list);
