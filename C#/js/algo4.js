class Node
{
    constructor(val)
    {
        this.next = undefined;
        this.val = val;
    }
};
//last in first out

class Stack
{
    constructor()
    {
        this.top = undefined;
    }

    push(val)
    //new head
    {
        if(!this.top)
        {
            this.top = new Node(val);
            return;
        }
        let temp = this.top;
        this.top = new Node(val);
        this.top.next = temp;
    }

    peek()
    {
        if(!this.top) return;
        return this.top.val;
    }

    isEmpty()
    {

    }

    pop()
    //remove bottom
    {
        if(!this.top) return;
        let top = this.top;
        this.top = this.top.next;
        return top.val;
    }
    Log()
    {
        let str="";
        for(let node=this.top;node;node=node.next)
        {
            str+=node.val+"->";
        }
        console.log(str);
    }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.Log();
// console.log(stack.pop());