class Node {
    // we pass in a value every time we create a node
    constructor(value) {
        // that value is passed into data
        this.data = value;
        // We can't assume this node has anything to point to so it starts at null
        this.next = null;
        this.prev = null;
    }
}
class DLL {
    // This creates a list with nothing inside of it
    constructor() {
        this.head = null;
        this.tail = null;
    }
    isEmpty() {
        // If the head is pointing at null there is nothing in our sll
        if(this.head == null) {
            // yes, the sll is empty
            return true;
        } else {
            return false;
        }
    }
    print() {
        // Print out all the values in our singly linked list
        // We want to push all the values into an array and print that array out
        var arr = [];
        var runner = this.head;
        // We need to use .push to push in the data of the node
        // we want to keep going until we hit null
        // We don't know how many times we're going to run so a while loop is the optimal solution
        while(runner) {
            // we need to add the data to the array
            arr.push(runner.data);
            // We NEED to iterate
            runner = runner.next;
        }
        // arr.push(runner.data);
        console.log(arr);
    }
    // Insert at Front
    // Insert a given value to the front of the doubly linked list
    InsertAtFront(val) {
        var node = new Node(val)
        if(this.head == null){
            this.head = node;
            this.tail = node;
        }
        else{
            var temp = this.head;
            this.head = node;
            this.head.next = temp;
            temp.prev = this.head;
        }
    }

    // Insert at Back
    // Insert a given value to the back of the doubly linked list
    InsertAtBack(val) {
        var node = new Node(val)
        if(this.head == null){
            this.head = node;
            this.tail = node;
        }
        else{
            var temp = this.tail;
            this.tail = node;
            this.tail.prev = temp;
            temp.next = this.tail;
        }
    }

    // Remove Middle Node
    // Remove the node in the middle of your doubly linked list
    RemoveMiddle() {
        // your code here
    }
    // Insert After
    // Insert a given value after another given value
    InsertAfter(val, valB) {
        if(this.isEmpty()){
            this.InsertAtBack(valB);
        }
        if(this.head.fata == val){
            this.InsertAtBack(valB);
        }
        while(runner.data != val){
            runner = runner.next;
        }
        const newNode = new Node(valB);
        newNode.prev = runner.prev;
        
    }

    // Insert Before
    // Insert a given value before another given value
    InsertBefore(val, valB) {
        
    }

    // Reverse
    // Reverse your doubly linked list
    Reverse() {
        // your code here
    }
}