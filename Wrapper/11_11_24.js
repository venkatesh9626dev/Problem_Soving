function sortedArr(arr){
    let sorted = false;
    while(!sorted){
        let count = 0;
        for(let i = 0; i< arr.length-1; i++){
            if(arr[i+1] < arr[i]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                count++;
            }
        }
        if(count === 0){
            sorted = true;
        }
    }
    return arr;
}

console.log(sortedArr([1,4,3,6,5]))

// Problem 2

// function alphabetsSort(strArr){
//     let sorted = false;

//     while(!sorted){
//         let count = 0;

//         for(let  i = 0; i<strArr.length -1; i++){
//             let maxLen = strArr[i].length > strArr[i+1].length ? strArr[i].length : strArr[i+1].length;
//             for(let j = 0; j < maxLen; j++){
//                 if(strArr[i+1][j] < strArr[i][j] || strArr[i+1][j] === undefined){
//                     let temp = strArr[i];
//                     strArr[i] = strArr[i+1];
//                     strArr[i+1] = temp;
//                     count++;
//                     break;
//                 }
//                 else if(strArr[i][j] === undefined){
//                     break;
//                 }
//                 else if(strArr[i+1][j] === strArr[i][j] ){
//                     continue;
//                 }
//                 else{
//                     break;
//                 }
//             }
//         }
//         if(count === 0){
//             sorted =true;
//         }
//     }
//     return strArr
// }
// console.log(sortedArr(["venkatesh","venkat","raja","abilash","aala","zahid"]))

