// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

        let newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(data);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr) {
            curr = current.next;
        }
        curr.next = newNode;

        return this.head;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
