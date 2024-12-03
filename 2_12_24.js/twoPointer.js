let arr = [10, 20, 30, 50];

function twoSum(numArr,tar){
    let left = 0;
    let right = numArr.length - 1;

    while(left < right){
        let sum = numArr[left] + numArr[right];
        if(sum === tar){
            return [numArr[left],numArr[right]]
        }
        else if(sum < tar){
            left++
        }
        else if(sum > tar){
            right--
        }
    }
    return false;
}
console.log(twoSum(arr,50))