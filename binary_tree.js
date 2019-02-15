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

Node.prototype.recursiveTraverse = function(rootNode){
    if(rootNode == null)
        rootNode = this

    console.log(rootNode.value)

    if(rootNode.left_val){
        this.recursiveTraverse(rootNode.left_val)
    }
    if(rootNode.right_val){
        this.recursiveTraverse(rootNode.right_val)
    }
    // if(rootNode.isLeaf()){
    //
    // }
}

//TODO: fix createTree function
const createTree = (arr) => {

    if(arr.length<=1)
        return new Node(arr[0])

    // Sort
    let sortedArray = arr.sort((x,y) => {return x>y});
    // Pick one in the middle and branch out adding elements recursively
    let middleIndex = Math.floor(arr.length/2);
    node = new Node(sortedArray[middleIndex]);
    console.log('sortedArray: ',sortedArray, ' ,middleIndex: ', middleIndex)

    // Split array
    let arrayLeft = sortedArray.splice(0,middleIndex);
    let arrayRight = sortedArray.splice(1, sortedArray.length);

    console.log(arrayLeft, ' - ', sortedArray[0], ' - ', arrayRight);

    if(arrayLeft)
        node.left_val = createTree(arrayLeft)
    if(arrayRight)
        node.right_val = createTree(arrayRight)

    console.log('node', node)
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

node.recursiveTraverse()

// let tree = createTree([5,6,2,8,5,3,7])
// console.log('tree: ', tree)
