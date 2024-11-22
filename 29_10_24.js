// Find the second maximum number
let arr  = [14,1,5,1,2];
function secondMax (arr){
    if(arr.length === 0) return "Give a valid array of integers";
    if(arr.length === 1) return arr[0];

    let f_max = arr[0];
    let s_max = 0;

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > f_max){
            s_max = f_max;
            f_max = arr[i];
        }
        else if(arr[i] > s_max){
            s_max = arr[i];
        }
    }
    return s_max;
}

console.log(secondMax(arr))

// Diff b/w max and min

function diffOfMinMax(arr){
    let max= arr[0];
    let min = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max= arr[i];
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return max - min ;
}
console.log(diffOfMinMax(arr));

// str Occurences

function subStrOccurence(subStr , str){
    let count = 0;
    for(let i = 0; i < str.length -1; i++){
        if(str[i] + str[i+1] === subStr){
            count++;
        }
    }
    return count;
}
console.log(subStrOccurence("is","This isis i s a string"));

function countOddEven(arr){
    let oddCount = 0;
    let evenCount = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenCount++;
        }
        else{
            oddCount++;
        }
    }
    let result = {"oddCount": oddCount,"evenCount":evenCount};
    return result;
}


console.log(countOddEven(arr));