let arr1 = [1, 4, 5, 7];
let arr2 = [10, 20, 30, 40];

function closePair(arr1,arr2,target){
    arr2.forEach(element => {
      arr1.push(element) 
    });

    let left = 0;
    let right = arr1.length - 1;
    let num = 0;
    let arr = [];

    while(left < right){
        let sum = arr1[left] + arr1[right];

        if(sum === target && num !== 0){
            return arr;
        }
        else if(sum > target && num !== 0){
            return arr;
        }
        else if(sum > target){
            right--;
            continue;
        }
        else if(sum < target){
            num = target - sum;
            arr = [arr1[left], arr1[right]];
            left++;
        }
        else{
            right--;
        }
    }
    return arr;
}
console.log(closePair(arr1,arr2,50))
