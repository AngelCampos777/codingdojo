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
    ContainsIt(num){
        var runner = this.root;
        if(this.isEmpty()){
            return false;
        }
        if(runner.left == null && runner.right == null){
            if(runner.data == num){
                return true;
            }else{
                return false;
            }
        }
        while(runner){
            if(runner.data == num){
                return true;
            }
            else if(runner.data > num){
                runner = runner.left;
            }
            else if(runner.data < num){
                runner = runner.right;
            }
        }
        return false;
    }

    ContainsRec(num, runner = this.root){
        if(this.isEmpty()){
            return false;
        }
        if(runner.left == null && runner.right == null){
            if(runner.data == num){
                return true;
            }else{
                return false;
            }
        }
        while(runner){
            if(runner.data == num){
                return true;
            }
            else if(runner.data > num){
                return this.ContainsRec(num, runner.left);
            }
            else if(runner.data < num){
                return this.ContainsRec(num, runner.right);
            }
        }
    }

    range(){
        let max = this.max();
        let min = this.min();
        let range = max - min;
        return range;
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
// console.log(myBST.ContainsIt(20));
// console.log(myBST.ContainsIt(80));
// console.log(myBST.ContainsRec(50));
// console.log(myBST.ContainsRec(30));
console.log(myBST.range());
