function maxOccurnce(arr){
    let obj = {};
    for(let i = 0; i < arr.length;i++){
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
    let max = -Infinity;
    let result;
    for(let key in obj){
        if(obj[key] > max){
            max = obj[key];
            result = key;
        }
    }
    return result;
}
console.log(maxOccurnce([5,5,4,4,4,6,7,8]))