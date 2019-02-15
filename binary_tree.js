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

Node.prototype.isLeaf = function(node){
    if (node.right_val == null && node.left_val == null)
        return true
    return false
}

Node.prototype.recursiveTraverse = function(rootNode, spreadResult){
    if(rootNode == null)
        rootNode = this
    if(spreadResult == null)
        spreadResult = []
    // console.log(rootNode.value)
    spreadResult.push(rootNode.value)

    if(rootNode.left_val){
        this.recursiveTraverse(rootNode.left_val, spreadResult)
    }
    if(rootNode.right_val){
        this.recursiveTraverse(rootNode.right_val, spreadResult)
    }

    return spreadResult
}

Node.prototype.depthTraverse = function(rootNode){
    if(rootNode == null)
        rootNode = this
    let spreadResult = []
    let stack = [rootNode]

    while(stack.length>0){
        let currentNode = stack.pop()
        // console.log(currentNode.value)
        spreadResult.push(currentNode.value)
        if(currentNode.right_val){
            stack.push(currentNode.right_val)
        }
        if(currentNode.left_val){
            stack.push(currentNode.left_val)
        }
    }
    return spreadResult
}

Node.prototype.breadthTraverse = function(rootNode){
    if (rootNode == null)
        rootNode = this
    let queue = [rootNode]
    let result = []

    while(queue.length>0){
        // remove item in new array and pop it to get value
        let currentNode = queue.splice(0,1).pop()
        // console.log(currentNode.value)
        result.push(currentNode.value)

        if(currentNode.left_val){
            queue.push(currentNode.left_val)
        }
        if(currentNode.right_val){
            queue.push(currentNode.right_val)
        }
    }
    return result
}

const createTree = (arr) => {
    let node = null

    if(arr.length<=1){
        node = new Node(arr[0])
    } else {
        // Sort
        let sortedArray = arr.sort((x,y) => {return x>y});
        // Pick one in the middle and branch out adding elements recursively
        let middleIndex = Math.floor(arr.length/2);
        node = new Node(sortedArray[middleIndex]);

        // Split array
        let arrayLeft = sortedArray.splice(0,middleIndex);
        let arrayRight = sortedArray.splice(1, sortedArray.length);

        console.log(arrayLeft, ' - ', sortedArray[0], ' - ', arrayRight);

        if(arrayLeft)
            node.left_val = createTree(arrayLeft)
        if(arrayRight)
            node.right_val = createTree(arrayRight)
    }

    return node
}

// Create tree manually
let node = new Node(50)
node.add(25,75)
    node.getNode(25).add(12,37)
    node.getNode(75).add(63,87)
        node.getNode(12).add(6,18)
        node.getNode(37).add(30,43)
        node.getNode(63).add(57,69)
        node.getNode(87).add(81,93)

console.log('node: ', node)
console.log('recursiveTraverse', node.recursiveTraverse())
console.log('Depth Traverse', node.depthTraverse())
console.log('Breadth Traverse',node.breadthTraverse())

//Create Tree automatically
let tree = createTree([5,6,2,8,0,3,7])
console.log('tree: ', tree)
console.log('tree Depth Traverse', tree.depthTraverse())
