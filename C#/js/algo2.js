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

    insertIt(num){
        if(this.isEmpty()){
            var node = new Node(num);
            myBST.root = node;
        }
        else{
            var runner = this.root;
            while(runner){
                if(num > runner.data && runner.right){
                    runner = runner.right;
                }
                else if(num > runner.data && !runner.right){
                    runner.right = node;
                    break;
                }
                if(num <= runner.data && runner.left){
                    runner = runner.left;
                }
                else if(num <= runner.data && !runner.left){
                    runner.left = node;
                    break;
                }
            }
        }
    }

    insertRec(num, runner = this.root){
        if(runner == null){
            var node = new Node(num);
            runner = node;
            return $`{num} has been inserted.`
        }
        while(runner){
            if(num > runner.data && runner.right){
                runner = runner.right;
            }
            else if(num > runner.data && !runner.right){
                return this.insertRec(num, runner.right);
            }
            if(num <= runner.data && runner.left){
                runner = runner.left;
            }
            else if(num <= runner.data && !runner.left){
                return this.insertRec(num, runner.left)
                
            }
        }
    }

    // Size
    // Return the total number of nodes in the tree
    size(runner = this.root, count = 0){
        if(runner){
            count++;
            count += this.size(runner.left) + this.size(runner.right);
        }
        return count;
    }

    // Height
    // Return the number of nodes that make up the longest branch in a tree
    height(runner = this.root){
        if(runner.next == null){
            return 0;
        }
        else{
            return 1 + Math.max(this.height(runner.left), this.height(runner.right));
        }
    }
    
    height2(node = this.root){
        if(!node){
        return 0;
        }
        let leftHeight = this.height2(node.left);
        let rightHeight = this.height2(node.right);
        if(leftHeight > rightHeight)
        {
        return leftHeight + 1
        } else {
        return rightHeight + 1;
        }
    }
    // isFull
    // Return true or false whether every node has either 0 or 2 children
    isFull(runner = this.root){
        if(runner == null){
            return true;
        }
        else if(runner.right == null && runner.left != null){
            return false;
        }
        else if(runner.right != null && runner.left == null){
            return false;
        }
        else{
            return this.isFull(runner.left) && this.isFull(runner.right);
        }
    }
    isFull2(node = this.root) {
        // If empty tree
        if (!node) {
            return false;
        }
    
        // if leaf node, leaf node is the end which means it has no left or right
        if (!node.left && !node.right) {
            return true;
        }
    
        // if both left and right subtrees are not null and
        // both left and right subtrees are full
        if (node.left && node.right) {
            return this.isFull(node.left) && this.isFull(node.right);
        }
        return false;
    }
    // fullTree
//     root
//     <-- 25 -->
//   /            \
// 15             50
// /    \         /    \
// 10     22       35     70
// /   \   /  \     /  \   /  \
// 4    12 18  24   31  44 66  90
//

// Depth First Search Preorder
// Use your skills with BSTs to return an array that contains all the values in the tree
//  using the concept of depth first search preorder. 
// Preorder: [root][left][right] -> for each node of this tree, we will read the data of
//  that node, then visit the left subtree and then the right subtree
// Should get back [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
    depthFIrstSearch(){
        let stack = [];
        let result = [];
        let runner = this.root;
        while(stack.length || runner){
            while(runner){
                //push val into result arr
                result.push(runner.data);
                //push node into tracking arr
                stack.push(runner);
                //increment runner left
                runner = runner.left;
            }
            //pop last node off stack and increment right
            runner = stack.pop();
            runner = runner.right;
        }
        return result;
    }
    toArrPreOrder(node = this.root, vals = []){
        if(node){
            //pre current in order swap 1,2 post swap 1,3
            vals.push(node.data);
            this.toArrPreOrder(node.left, vals);
            this.toArrPreOrder(node.right, vals);
        }
    }

// BONUS: Depth First Search Inorder
// Now use your skills to return an array that contains all the values using DFS Inorder. 
// Inorder: [left][root][right] -> for each node, visit the left subtree, then read the 
// data of the node, then visit the right subtree
// Should get back [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
    depthInOrder(runner = this.root, arr = []){
        //if bst is empty return empty arr
        if(!runner){
            return arr;
        }
        if(!runner.left && !runner.right){
            arr.push(runner.data);
            return;
        }
        if(runner.left){
            this.depthInOrder(runner.left, arr);
            arr.push(runner.data);
        }
        if(runner.right && !runner.left){
            this.depthInOrder(runner.data);
            arr.push(runner.right, arr);
        }
        else{
            this.depthInOrder(runer.right,arr);
        }
        return arr;
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
// console.log("our min val is: " + myBST.min());
// console.log("our max val is: " + myBST.max());
// console.log(myBST.ContainsIt(20));
// console.log(myBST.ContainsIt(80));
// console.log(myBST.ContainsRec(50));
// console.log(myBST.ContainsRec(30));
// console.log(myBST.range());
// myBST.insertIt(15);
// console.log(myBST.root.left.left.right);
console.log(myBST.size());