function subArraySum(arr,target){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            sum+=arr[j];
            if(sum > target){
                break;
            }
            else if(sum === target){
                return [i+1,j+1]
            }
        }
        sum = 0;
    }
    return -1
}

let arr = [1,2,3,7,5];

let target = 12;

console.log(subArraySum(arr,target));
