let array = [5,8,3,9,34,56,23,0,68,90,23]

const merge = (arr1,arr2) => {
    let result = []
    // compare elements in array
    while(arr1.length>0 || arr2.length>0){
        let val1 = arr1[0] || Number.NEGATIVE_INFITINIY;
        let val2 = arr2[0] || Number.POSITIVE_INFINITY;
        (val1<val2)?
            result.push(arr1.splice(0,1).pop()): //remove first element
            result.push(arr2.splice(0,1).pop())
    }
    return result
}

const mergesort(arr) => {
    // const middleIndex = Math.floor(array.length/2)
    // const arr1 = arr.splice(0,middleIndex+1), arr2 = arr;
    //
    // if(arr1.length<=2 && arr2.length<=2){
    //     // order and merge merge
    //     arr1[0]
    // } else {
    //     // mergesort
    //     mergesort()
    // }
    //
    // return

    // TODO: Alternative 
    let arrOfArrs = arr.map(el => {return [el]})
    let merged = []
    for (let i=0; i<arrOfArrs.length; i++){
        if(i%2==0){
            //case odd array last element
            if(i==arrOfArrs.length-1){
                merged.push(arrOfArrs[i])
            } else {
                merged.push(merge(arrOfArrs[i],arrOfArrs[i+1]))
            }
        }
    }
}
//split array and call mergesort

// let testArr1 = [5,9], testArr2 = [6,7
// console.log(merge(testArr1, testArr2))
