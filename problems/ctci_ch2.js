class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.list = {};
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    if (!this.head && !this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      this.tail.next = this.tail;
      this.tail = new Node(value);
    }
  }

  removeHead() {
    if (this.head) {
      let head = this.head;
      this.head = this.head.next;
      return head.value;
    }
  }

  contains(value) {
    let pointer = this.head;

    while (pointer.next) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.next;
    }

    return false;
  }

  delete(value) {
    // deletes all nodes with value from linked list
    let pointer = this.head;
    let slowPointer;
    while (pointer.next) {
      if (pointer !== this.head && !slowPointer) {
        slowPointer = this.head;
      }

      if (pointer.value === value) {
        slowPointer.next = pointer.next;
        delete pointer;
      }

      pointer = pointer.next;
      slowPointer = slowPointer.next;
    }
  }
}

const removeDupesFromLinkedList = (linkedList) => {
  let pointer = linkedList.head;
  const store = {};
  while(pointer.next) {
    if (!store[pointer.value]) {
      store[pointer.value] = true;
    } else {
      linkedList.delete(pointer.value);
    }
    pointer = pointer.next;
  }
};

const nthToLastElement = (n, linkedList) => {
  let len = linkedList.head ? 1 : 0;
  let pointerA = linkedList.head;
  let pointerB = null;

  while (pointerA.next) {
    pointerA = pointerA.next;
    len += 1;
  }

  const nthFromLast = len - n;
  for (let i = 0; i < nthFromLast; i++) {
    if (!pointerB) {
      pointerB = linkedList.head;
    } else {
      pointerB = pointerB.next;
    }
  }

  return pointerB.value;
};

module.exports = {
  removeDupesFromLinkedList
};