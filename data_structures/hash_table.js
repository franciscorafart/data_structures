// Simple hash function
let hashFunc = (key) => {
    let index = null;
    // Hashing process
    index = key.length;

    return index;
}

//hash table object
function HashTable(){
    this.table = [];
}

HashTable.prototype.add = function(key,value){
    let index = hashFunc(key);

    // Find if index is used
    if(this.table[index] == null);
        this.table[index] = [];

    // Insert key-value pair
    this.table[index].push([key, value]);
}

HashTable.prototype.get = function(key){
    let index = hashFunc(key);
    let value = null;
    let bucket = this.table[index];

    if(bucket){
        for (let el of bucket){
            if(el[0] == key){
                value = el[1];
                break;
            }
        }
    }
    return value;
}

let myHashTable = new HashTable();

myHashTable.add('address', '48 Carrot St, Boston MA');
myHashTable.add('name', 'Francisco Rafart');
myHashTable.add('phone', '3075004727');
myHashTable.add('padre', 'Horacio');
myHashTable.add('madre', 'Alejandra');

// console.log('myHashTable', myHashTable)
console.log('myHashTable.get("phone")', myHashTable.get('phone'));
console.log('myHashTable.get("padre")', myHashTable.get('padre'));
console.log('myHashTable.get("madre")', myHashTable.get('madre'));
console.log('myHashTable.get("address")', myHashTable.get('address'));
console.log('myHashTable.get("not_in_hastable")', myHashTable.get('not_in_hastable'));
