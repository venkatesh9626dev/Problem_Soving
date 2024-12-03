let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

function binarySearch(arr,target){
    let l = 0;
    let r= arr.length -1;
    while(l <=r){
        let m = Math.trunc((l+r)/2);
        if(arr[m] === target){
            return m;
        }
        else if(arr[m] < target){
            l = m +1;
        }
        else if(arr[m] > target){
            r = m -1;
        }
    }
    return -1;
}
console.log(binarySearch(arr,1));
