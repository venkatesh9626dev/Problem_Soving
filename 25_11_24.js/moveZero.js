function movezero(nums){
    let count = 1;
    let i = 0;
    while (i < nums.length - count){
        if(nums[i] === 0){
            for(let j = i; j < nums.length - 1; j++){
                nums[j] = nums[j+1]
            }
            nums[nums.length - 1] = 0
            count++;
            i = 0;
        }
        else{
            i++;
        }
    }
    return nums;
}

console.log(movezero([0,1,0,3,12]))