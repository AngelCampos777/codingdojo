// Our Node and SLL classes

// We need a Node class
class Node {
    // we pass in a value every time we create a node
    constructor(value) {
        // that value is passed into data
        this.data = value;
        // We can't assume this node has anything to point to so it starts at null
        this.next = null;
    }
}

// Our singly linked list class
class SLL {
    // This creates a list with nothing inside of it
    constructor() {
        this.head = null;
    }

    // We are going to be writing methods that make this class function
    // How do we identify that a singly linked list is empty?
    isEmpty() {
        // If the head is pointing at null there is nothing in our sll
        if(this.head == null) {
            // yes, the sll is empty
            return true;
        } else {
            return false;
        }

        // a more efficient way of writing the question
        // return this.head == null;
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

    insertAtBack(val) {
        if(this.isEmpty()){
            this.head = new Node(val);
        } else {
            var runner = this.head;
            // We need to get to the back
            while(runner.next) {
                runner = runner.next;
            }
            runner.next = new Node(val);
        }
    }

    // Given a value, insert that value as a node at the front of your singly linked list
    insertAtFront(val) {
        var newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode
    }
    // Remove and return the head node from your list (remember this means we need a new head)
    removeHead(){
        let current = this.head;
        this.head = current.next;
        this.size--;
        console.log (current);
}

// EXTRA: calculate the average of all the values in your list (ex: if you list contained the values 3, 5, 2, 7, 3, then your average should come out as 4)
    average(){
        var runner = this.head;
        var length = 0;
        var sum = 0;
        while (runner){
            length++;
            sum += runner.data;
            runner = runner.next;
        }
        console.log(sum/length);
}

// is number in sll, return bool, iterative, recursive
    containsIt(num){
        if(this.isEmpty()){
            return false;
        }
        var runner = this.head;
        while(runner){
            if(runner.data == num){
                return true;
            }
                runner = runner.next;
        }
        return false;
    }

    containsRec(num, runner = this.head){
        if(this.isEmpty()){
            return false;
        }
        if(!runner.next){
            return false;
        }
        if(num == runner.data){
            return true;
        }
        runner = runner.next;
        return this.containsRec(num, runner)
    }
// Remove number at back and return
    removeTail(){
        let runner = this.head;
        if(this.isEmpty()){
            return "There are no nodes in this list."
        }
        if(!runner.next){
            let temp = new Node(this.head.data);
            this.removeHead();
            return temp;
        }

        while(runner.next.next){
            runner = runner.next;
        }
        let temp = new Node(runner.next.data);
        runner.next = null;
        return temp;
    }

    // Return (don't remove) the second to last value in your list (ex: if your list is 2, 5, 6, 3, 9, you should return 3)
    secondToLast(){
        let runner = this.head;
        if(this.isEmpty()){
            return false;
        }
        if(runner.next == null){
            return false;
        }
        while(runner.next.next != null){
            runner = runner.next;
        }
        return runner.data;
    }
    
    // Given a value, remove that value from the list and return true or false whether it was removed
    removeVals(val){
        //go through the sll, check the data against some num, remove it if it exists 
        //and not lose the rest of the list return true if existed false if not
        let removed = false;
        let runner = this.head;
        if(this.isEmpty()){
            return false;
        }
        while(runner){
            if(this.head.data == val){
                this.head = this.head.next;
                runner = this.head;
                removed = true;
            }
            if(runner.next == null){
                return removed;
            }
            if(runner.next.data == val){
                runner.next = runner.next.next;
                removed = true;
            }
            runner = runner.next;
        }
        return removed;
    }

    removeValue(val){
        var runner = this.head;
        if (runner.data == val){
            this.removeHead();
            return true;
        }
        let previous;
        while (runner){
            if (runner.data == val){
                previous.next = runner.next;
                this.size--;
                return true;
            }
            previous = runner;
            runner = runner.next;
        }
        return false;
    }

    // removeVal(val, runner=this.head, removed=false) {
    //     if(this.isEmpty()){
    //         return false;
    //     }
    //     while(runner.next){
    //         if(runner.next.data === val){
    //             break;
    //         }
    //         runner = runner.next;
    //     }
    //     if(!runner.next){
    //         if(runner.data === val){
    //             this.removeBack();
    //             return true;
    //         }
    //         else{
    //             return removed;
    //         }
    //     }
    //     let temp = runner.next;
    //     runner.next = temp.next;
    //     temp.next = null;
    //     return this.removeVal(val, runner, true);
    // }
    // Note: how would this code look if you only wanted to remove one instance of the value?
    //How would this code look if you wanted to remove ALL instances of the value? (ie: plan for duplicates)
    
    // EXTRA: Given ValueA and ValueB, insert a node with ValueA BEFORE the node containing ValueB (this is called a prepend)
    // and return true or false whether it was pre-pended possible recursion for multiple run throughs
    prepend(ValA, ValB){
        let runner = this.head;
        if(runner.data == ValB){
            this.insertAtFront(ValA);
            return true;
        }
        if(this.isEmpty()){
            return false;
        }
        while(runner.next){
            if(runner.next.data == ValB){
                break;
            }
            runner = runner.next;
        }
        if(!runner.next){
            return false;
        }
        let temp = runner.next;
        runner.next = new Node(ValA);
        runner.next.next = temp
        return true;
    }
    
// Given a different singly linked list, concatenate the values of that list onto the back of your own 
//(ex: if your original list contained 1, 2, 3 and the given list contained 4, 5, 6, you should now have 
//a list that contains the values 1, 2, 3, 4, 5, 6)
    concat(addArr){
    for(var i = 0; i < addArr.length; i++){
        this.insertAtBack(addArr[i]);
    }
    }

// Find the smallest value in your list and move it to the front (ex: if your list looked like this:
//4, 8, 2, 5, then after the function it should look like this: 2, 4, 8, 5)
    moveMinToFront(){
    let min = this.head.data;
    var  runner = this.head;
    while(runner){
        if(runner.data < min){
            min = runner.data;
        }
        runner = runner.next;
        }
        this.removeValue(min);
        this.insertAtFront(min);
    }

// EXTRA: Given a value, split your list into two lists along that value. Ex: if your original list was 
//1, 2, 3, 4, 5 and you were given 3, your first list should have 1, 2 and your second list should have 3, 4, 5
    splitOnVal(val){
        if(this.containsRec(val)){
            if(this.head.data == val){
                return "this returns the same list."
            }
            let  runner = this.head;
            while(runner.next.data != val){
                runner = runner.next;
            }
            console.log(runner.data);
            const sll2 = new SLL();
            sll2.head = runner.next;
            runner.next = null;
            return sll2;
        }else{
        return null;
        } 
    }
    // Reverse
    // Reverse a singly linked list. If your original list is 1 -> 2 -> 3 -> 4 your reversed list should be 
    // 4 -> 3 -> 2 -> 1
    reverse(sllTemp = new SLL(), runner = this.head){ 
        if(this.isEmpty()){
            return sllTemp;
        }
        if(runner.next != null){
            return this.reverse(sllTemp, runner = runner.next);
        }
        sllTemp.insertAtBack(runner);
        this.removeTail();
        return this.reverse(sllTemp);
    }
    
    // HasLoop
    // Return true or false whether your SLL has a loop (meaning the last value points back in to the list 
    // and creates an infinite loop)

    
    // EXTRA: Remove Negatives
    // Remove all negative values from your singly linked list
}



var sll = new SLL();
var node1 = new Node(5);
var node2 = new Node(7);
var node3 = new Node(9);
var node4 = new Node(1);
// console.log(sll.isEmpty());
// sll.head = node1;
// console.log(sll.isEmpty());
// Remember the head is a pointer
// The pointer is pointing at a node
// That node has a data and a next value
// So when we represent the node as head we are able to grab its attributes
// sll.head.next = node2;
// sll.head.next.next = node3;
// sll.head.next.next.next = node4;
sll.insertAtBack(3);
sll.insertAtBack(9);
sll.insertAtBack(7);
sll.insertAtBack(5);
sll.insertAtBack(1);
sll.print();
sll.reverse();
// console.log(sll);
sll.print();


// sll.insertAtFront(6);
// sll.print();
// sll.removeHead();
// sll.print();
// sll.average()
// console.log(sll.containsIt(1));
// console.log(sll.containsIt(0));
// console.log(sll.containsRec(1));
// console.log(sll.containsRec(0));
// sll.removeTail();
// sll.print();
// console.log(sll.secondToLast());
// sll.print();
// console.log(sll.removeVals(1));
// sll.print();

// console.log(sll.prepend(2,9));
// console.log(sll.prepend(2,1));
// sll.print();

// sll.concat([2,3,4])
// sll.moveMinToFront();

// var sll2 = sll.splitOnVal(9);
// sll.print();
// if(sll2 != null){
//     sll2.print();
// }