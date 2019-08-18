const arr = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 726, 728,
    799, 810, 878, 890, 899, 919, 938, 992, 1000, 1020, 1032, 1085
]; // arr.length = 30

const binaryS = (arr, el, min, max) => {
    if (min<=max){
        const midIdx = min + Math.ceil((max-min)/2);

        if(arr[midIdx]===el)
            return midIdx


        if (arr[midIdx]>el){
            return binaryS(arr, el, min, midIdx-1);
        }
        return binaryS(arr, el, midIdx+1, max);
    }

    return -1
}

const expSearch = (arr, el) => {
    let power = 0;
    let maxL = 1;
    let minL = 1;

    while (maxL<=arr.length){
        maxL = Math.pow(2, power);

        if (maxL>arr.length){
            maxL = arr.length;
            break;
        }

        if (arr[maxL-1]===el)
            return maxL-1;

        if (arr[maxL-1]>el){
            break;
        }

        minL = maxL;
        power++
    }

    // Binary search on range i/2 --> i
    const idx = binaryS(arr, el, minL-1, maxL-1)

    return idx
}

console.log('Index', expSearch(arr, 22))