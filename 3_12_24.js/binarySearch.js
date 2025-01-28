let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

function binarySearch(arr,target){
    let l = 0;
    let r= arr.length -1;
    while(l <=r){
        let m = Math.trunc((l+r)/2);
        if(arr[m] === target){
            return m;
        }
        else if(arr[m] < target){
            l = m +1;
        }
        else if(arr[m] > target){
            r = m -1;
        }
    }
    return -1;
}
console.log(binarySearch(arr,1));

function secondLargerstNum(arr){
    if(arr.length === 0){
        return "No elements in the array"
    }

    let result = [];
    let firstmax = - Infinity;
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i] > firstmax){
            firstmax = arr[i]
        }
    }
    result.push(firstmax);
    let secondMax = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === firstmax){
            continue
        }
        else if(arr[i] > secondMax){
            secondMax = arr[i]
        }
    }
    if(secondMax === -Infinity){
        result.push(firstmax)
    }
    else{
        result.push(secondMax)
    }
    let thirdmax = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === firstmax ||arr[i] === secondMax){
            continue
        }
        else if(arr[i] > thirdmax){
            thirdmax = arr[i]
        }
    }
    if(thirdmax === -Infinity){
        result.push(secondMax)
    }
    else{
        result.push(thirdmax)
    }
    return result
}
console.log(secondLargerstNum(arr))