//Node

function Node(x){
    this.value = x
    this.left_val = null;
    this.right_val = null;
}

Node.prototype.add = function(x,y){
    if(x){
        let leftNode = new Node(x);
        this.right_val = leftNode
    }
    if(y){
        let rightNode = new Node(y);
        this.left_val = rightNode
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

Node.prototype.getNodeValue = function(x){
    let node = this.getNode(x)
    if (node)
        return node.value

    return null
}

Node.prototype.insertNodeAt = function(val,x,y){
    let node = this.getNode(val)
    if(node){
        node.add(x,y)
        return true
    }
    return false
}
