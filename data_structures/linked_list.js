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

    if(this.initialNode){
        // last node's next
        this.lastNode.next = node
        // Reassign last node to new one
        this.lastNode = this.lastNode.next
    } else {
        //Assign initial node
        this.initialNode = node
        this.lastNode = node
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

// Evaluation
// let myLinkedList = new LinkedList()

let firstNode = new Node('Lola')
let myLinkedList = new LinkedList(firstNode)

myLinkedList.push('Juan')
myLinkedList.push('Pablo')
myLinkedList.push('Bob')
myLinkedList.push('Jack')

console.log(myLinkedList)
console.log('myLL.get(3): ', myLinkedList.get(3))
