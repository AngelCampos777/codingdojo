class Node
{
    constructor (val,next = null)
    {
        this.next = next;
        this.data = val;
    }
}

class Queue
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }
    //First In First Out

    // Enqueue - add an item and return the new size of the queue
    enqueue(val) {
        var node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
            return this;
        }
        else{
            this.tail.next = node;
            this.tail = node;
            return this;
        }
    }

    // Dequeue - remove and return the first item
    dequeue() {
        if(this.isEmpty()){
            return "Queue is empty";
        } else {
            this.top = this.top.next;
            this.length--;
            return this;
        }
    }

    // IsEmpty - return true or false whether the queue is empty
    isEmpty() {
        if(!this.head)
        {

        }
    }

    // Front - return the first item without removing it
    front() {
        if(this.isEmpty()){
            return "Queue is empty";
        }
    }

    // Compare queues using the built in methods you have written so far for Queues
    compare(otherQ) {
        
    }

    // Return true or false whether a queue is a palindrome, also using only built in methods
    isPalindrome() {
        // Your code here
    }
    // Sum of Halves Equal
// Return true or false whether the sum of the front half of your queue is equal to the sum of the left half of your queue - as before, try to limit yourself to only built in methods within your queue class

    SumOfHalves() {
    // your code here
    }

    // Two Stack Queue
    // This one is a proof on concept: can you get the functionality of a queue using two stacks? Use your knowledge of queues and stacks to create a class called TwoStackQueue and write the enqueue and dequeue methods

    class TwoStackQueue {
        constructor() {
            this.stack1 = new Stack();
            this.stack2 = new Stack();
        }

        enqueue(item) {
            // your code here
        }

        dequeue() {
            // your code here
        }
    }
}
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);

console.log(queue);