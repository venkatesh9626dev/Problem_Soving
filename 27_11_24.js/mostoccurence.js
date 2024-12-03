let str = "hello world";

function mostOccur(str){
    let count = 0;
    let char = "";
    let strArr = [];
    for(let i = 0; i < str.length; i++){
        let innerCount =1;
        for(let j = 0; j < strArr.length; j++){
            if(str[i] === strArr[j]){
                innerCount++;
            }
        }
        strArr.push(str[i])
        if(innerCount > count){
            count = innerCount;
            char = str[i];
        }
    }
    return char;
}
console.log(mostOccur(str))