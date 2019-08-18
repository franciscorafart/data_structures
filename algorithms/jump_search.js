const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];

const jumpSearch = (arr, el) => {
    let step = Math.floor(Math.sqrt(arr.length));
    let upperBound = arr.length-1;

    for (let i=0;i<=upperBound; i+=step){
        if (arr[i] === el)
            return i

        if(i>upperBound-step){
            step=1
        }

        if (arr[i]>el){
            upperBound=i
            i=i-step;
            step=1;
            continue
        }
    }

    return -1
}

console.log('Index of ', 377,': ', jumpSearch(arr, 377))
