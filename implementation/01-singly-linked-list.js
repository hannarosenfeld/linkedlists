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

        // Write your hypothesis on the time complexity of this method here O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // console.log(`start length: ${this.length}`);
        // console.log(`start list: ${this}`);
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
           return this;
        } else {

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
    }
    // console.log(`end length: ${this.length}`);
    // console.log(`end list: ${this}`);
       return this;
        // Write your hypothesis on the time complexity of this method here O(n)
    }

    removeFromHead() {
        // Remove node at head
        if (!this.length) return;
        // Should remove head node from the list
        // by reassigning the head pointer to the next node
        let remove = this.head
        this.head = this.head.next;

        this.length--;

        return remove;
        // Write your hypothesis on the time complexity of this method here O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.length) return;
        this.length--;

        let curr = this.head;
        let prev;


        while (curr.next) {
            prev = curr;
            curr = curr.next;

        }
        if (prev) {
        prev.next = null;
        } else {
        this.head = null;
        }
        return curr;

        // Write your hypothesis on the time complexity of this method here O(n)
    }

    peekAtHead() {
        // Return the value of head node
        if (!this.length) return;
        // Your code here
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        let curr = this.head;

        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}


const list = new SinglyLinkedList();

list.addToTail('test');
