class Node
{
    constructor(val, pri)
    {
        this.data = val;
        this.next = null;
        this.pri = pri;
    }
}
class PriQueue
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }
    enqueue(val, pri) {
        var node = new PriNode(val, pri);
        if(this.head == null){
            this.head = node;
            this.tail = node;
            return;
        }
        let runner = this.head;
        if(runner.priority>node.priority){
            let temp = this.head;
            this.head = node;
            this.head.next = temp;
        }
        while(runner.next){
            if(node.priority<runner.next.priority){
                    let temp = runner.next;
                    runner.next = node;
                    runner.next.next = temp;
                    return;
        }
        runner = runner.next
        }
        let temp = this.tail;
        this.tail = node;
        runner = temp;
        runner.next = this.tail;
        return;
    }
}