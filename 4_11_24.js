function firstMax(arr){
    let index ;
    let max = arr[0];
    for(let i = 1 ; i < arr.length; i++){
        if(arr[i] > max){
            index = i;
            max = arr[i];
        }
    }
    return index;
}
let arr = [4, 5, 1, 2, 5, 43];
console.log(firstMax(arr));

// less than 15 search in a array

function linearSearch(arr){
    let resultArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 15){
            resultArr.push(arr[i]);
        }
    }
    return resultArr.length === 0 ? "No elements in the array less than 15" : resultArr;
}
console.log(linearSearch(arr));