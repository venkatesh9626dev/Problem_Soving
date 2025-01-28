// remove duplicate


function removeDuplicate(mixed_arr){
    let newArr = [];

    for(let i = 0; i < mixed_arr.length; i++){
        let isExist = false;
        for(let j = 0; j < newArr.length; j++){
            if(newArr[j] === mixed_arr[i]){
                isExist = true;
            }
        }
        if(!isExist) newArr.push(mixed_arr[i])
    }
    return newArr;
}
console.log(removeDuplicate(arr));

// add unExisting data into array

let arr = [3, 4, 1, 5, 1, 9, 3];

function insertNewData(data){
    let isExist = false;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === data){
            isExist = true;
            break;
        }
    }
    if(!isExist) arr.push(data)
    return arr
}
console.log(insertNewData(1));

// union array

function unionArr(arr1,arr2){
    for( let i = 0; i < arr2.length; i++){
        let isExist = false;
        for(let j = 0; j < arr1.length;j++){
            if(arr1[j] === arr2[i]){
                isExist = true;
            }
        }
        if(!isExist) arr1.push(arr2[i])
    }
return arr1
}
console.log(unionArr([3, 1, 5, 7, 8],[5, 1, 8, 10, 11]))

// Intersection array

function Intersection(arr1,arr2){
    let minArr;
    let maxArr;
    if(arr1.length < arr2.length){
        minArr = arr1;
        maxArr = arr2;
    }
    else{
        minArr = arr2;
        maxArr = arr1;
    }
    let resultArr = [];
    for(let i = 0; i < minArr.length; i++){
       
        for(let j = 0 ;j < maxArr.length; j++){
            if(minArr[i] === maxArr[j]){
                resultArr.push(minArr[i]);
                break;
            }
        }
    }
    return resultArr
}
console.log(Intersection([3, 1, 5, 7],[5, 1, 8, 10, 11]))