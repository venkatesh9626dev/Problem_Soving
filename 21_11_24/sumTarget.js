// target = sum of two numbers in a array

function twoNum(arr,target){
    let resultArr= [];
    let index = 1;
    for(let i = index-1; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i]+arr[j] === target){
                resultArr.push(arr[i],arr[j])
                return resultArr
            }
        }
    }
    
}
console.log(twoNum([2, 7, 11, 15],18))