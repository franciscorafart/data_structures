let array = [5,8,3,9,34,56,23,0,4]

let merge = (arr1,arr2) => {
    let result = []
    // compare elements in array
    while(arr1.length>0 || arr2.length>0){
        let val1 = arr1[0] || Number.NEGATIVE_INFINITY;
        let val2 = arr2[0] || Number.NEGATIVE_INFINITY;

        if(arr1.length && arr2.length){
            (val1<val2)?
                result.push(arr1.splice(0,1).pop()): //remove first element
                result.push(arr2.splice(0,1).pop())
        } else if (arr1.length) {
            result.push(arr1.splice(0,1).pop())
        } else if (arr2.length) {
            result.push(arr2.splice(0,1).pop())
        }
    }
    return result
}

let mergesort = (arr) => {
    if (arr.length<=1)
        return arr;

    const middleIndex = Math.floor(arr.length/2)
    const arr1 = arr.slice(0,middleIndex);
    const arr2 = arr.slice(middleIndex,arr.length);

    console.log(arr)

    return merge(mergesort(arr1), mergesort(arr2))
}

console.log('mergesort', array,'=', mergesort(array))
