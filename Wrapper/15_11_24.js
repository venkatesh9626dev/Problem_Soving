// insertion sort
let arr = [8,5,6,7,1,4,3]
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let j = i-1;
        let key = arr[i];
        while (j >=0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr
}

console.log(insertionSort(arr))
