// Simple hash function
let hashFunc = (key) => {
    let index = null
    // Hashing process
    index = key.length

    // return
    return index
}

//hash table object
function HashTable(){
    this.table = []
}

HashTable.prototype.add = function(key,value){
    let index = hashFunc(key)

    // Find if index is used
    if(this.table[index] == null)
        this.table[index] = []
    // Insert key-value pair
    this.table[index].push([key, value])
}

HashTable.prototype.get = function(key){
    let index = hashFunc(key)
    let value = null
    //If more than one element
    let bucket = this.table[index]
    if(bucket){
        for (let el of bucket){
            if(el[0] == key){
                value = el[1]
                break;
            }
        }
    }
    return value
}

let myHashTable = new HashTable()

myHashTable.add('address', '30 Carruth St, Quincy MA')
myHashTable.add('name', 'Francisco Rafart')
myHashTable.add('phone', '8578003797')
myHashTable.add('padre', 'Horacio')
myHashTable.add('madre', 'Alejandra')

// console.log('myHashTable', myHashTable)
console.log('myHashTable.get("phone")', myHashTable.get('phone'))
console.log('myHashTable.get("padre")', myHashTable.get('padre'))
console.log('myHashTable.get("madre")', myHashTable.get('madre'))
console.log('myHashTable.get("address")', myHashTable.get('address'))
