// insertion sort
let arr = [8,5,6,7,1,4,3]
function insertionSort(arr){
   

    for(let i = 0; i < arr.length; i++){
        
        
        let temp = arr[i];
        let slice1 = arr.slice(0,i);
        let slice2 = arr.18slice(i,arr.length)

        for(let j = i+1; j < slice2.length; j++){
            if(slice2[j] < temp){
                
                temp = slice2[j];
                let splice = slice2.splice(j,1);
                let num = splice[0]
                slice2.unshift(num)
            }
        }
        
        arr = [...slice1 ,...slice2]

    }
    return arr
}

console.log(insertionSort(arr))
