//binary search tree

//nodes

class Node{
    constructor (val){
        this.data = val;
        //small to the left
        this.left = null;
        //large to right
        this.right = null;
    }
}

class BST {
    constructor(){
        //same as sll head pointer
        //all trees start aat root
        this.root = null;
    }
    //is it empty?
    isEmpty(){
        return this.root == null;
    }
    //min
    min(){
        var runner = this.root;
        while(runner.left){
            runner = runner.left;
        }
        return runner.data;
    }
    //max
    max(){
        var runner = this.root;
        while(runner.right){
            runner = runner.right;
        }
        return runner.data;
    }
}




var myBST = new BST();
var node1 = new Node(30);
myBST.root = node1;
console.log(myBST);
var node2 = new Node(20);
var node3 = new Node(40);
var node4 = new Node(10);
myBST.root.left = node2;
myBST.root.left.left = node4;
myBST.root.right = node3;
console.log(myBST);
console.log("our min val is: " + myBST.min());
console.log("our max val is: " + myBST.max());
