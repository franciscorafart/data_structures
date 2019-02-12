//Node

function Node(x){
    this.value = x
    this.left_val = null;
    this.right_val = null;
}

Node.prototype.add = function(x,y){
    if(x){
        let leftNode = new Node(x);
        this.left_val = leftNode
    }
    if(y){
        let rightNode = new Node(y);
        this.right_val = rightNode
    }
}

Node.prototype.getNode = function(x){
    let node = this
    while(node != null){
        if (node.value == x){
            break;
        } else {
            (x<node.value)? node = node.left_val: node = node.right_val;
        }
    }
    return node
}

Node.prototype.hasNode = function(x){
    let node = this.getNode(x)
    if (node)
        return true

    return false
}

Node.prototype.insertNodeAt = function(val,x,y){
    let node = this.getNode(val)
    if(node){
        node.add(x,y)
        return true
    }
    return false
}

Node.prototype.createTree = function(arr){
    //sort
    let sortedArray = arr.sort((x,y) => {return x<y})
    console.log(sortedArray)

    // pick one in the middle and branch out adding elements recursively
}

//Create tree
let node = new Node(50)
node.add(25,75)
node.getNode(25).add(12,37)
node.getNode(75).add(63,87)



console.log('node: ', node)
