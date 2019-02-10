//Linked list

function Node(value, index){
    this.next = null
    this.value = value
    this.index = index? index:0
}

function LinkedList(Node){
    this.initialNode = Node? Node: null;
    this.lastNode = Node? Node: null;
    this.length = Node? 0:1
}

LinkedList.prototype.push = function(value){
    let index = (this.lastNode)? this.lastNode.index+1: 0;
    this.length += 1
    let node = new Node(value, index)

    //Assign initial node
    if(this.initialNode === null){
        this.initialNode = node
        this.lastNode = node
    } else {
        // last node's next
        this.lastNode.next = node
        //reassign
        this.lastNode = this.lastNode.next
    }


}

LinkedList.prototype.get = function(i){
    let iterable = this.initialNode
    let value = null
    while (iterable){
        if(i === iterable.index){
            value = iterable.value
            break;
        }
        iterable = iterable.next
    }
    return value
}

let firstNode = new Node('Lola')

let myLL = new LinkedList(firstNode)
// let myLL = new LinkedList()

// myLL.push(1)
myLL.push('Juan')
myLL.push('Pablo')
myLL.push('Bob')
myLL.push('Jack')

console.log(myLL)
console.log('myLL.get(3): ', myLL.get(3))
