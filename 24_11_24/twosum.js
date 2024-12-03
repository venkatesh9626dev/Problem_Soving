var twoSum = function(nums, target) {
    let obj = {};
    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]] !=undefined){
            return [i,obj[nums[i]]]
        }
        else{
            let req = target - nums[i];
            obj[req] = i;
        }
    }
};

console.log(twoSum( [2,7,11,15],9))
