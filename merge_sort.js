let array = [5,8,3,9,34,298,56,23,0,4,7,87,30,18,82,94,104]

let merge = (arr1,arr2) => {
    let result = []

    while(arr1.length>0 || arr2.length>0){

        if(arr1.length && arr2.length){
            (arr1[0]<arr2[0])?
                result.push(arr1.shift()): //remove first element
                result.push(arr2.shift())
        } else if (arr1.length) {
            result.push(arr1.shift())
        } else if (arr2.length) {
            result.push(arr2.shift())
        }
    }
    return result
}

let mergesort = (arr) => {
    console.log(arr)
    if (arr.length<=1)
        return arr;

    const middleIndex = Math.floor(arr.length/2)
    const arr1 = arr.slice(0,middleIndex);
    const arr2 = arr.slice(middleIndex,arr.length);

    return merge(mergesort(arr1), mergesort(arr2))
}

console.log('mergesort', array,'=', mergesort(array))
