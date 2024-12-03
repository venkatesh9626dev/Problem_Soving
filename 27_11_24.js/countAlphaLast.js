let arr = ["apple","amar","apple","apple"];

function countAlpha(strArr){
    let max = "";
    let count = 0;

    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] > max){
            max = strArr[i];
            count = 1;
        }
        else if(strArr[i] === max){
            count++;
        }
    }
    return count;
}
console.log(countAlpha(arr))