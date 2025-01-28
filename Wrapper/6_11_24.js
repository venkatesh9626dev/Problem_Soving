function maxOccurence(char,strArr){
    if(strArr.length === 0) return "Give a valid Array";
    if(strArr.length === 1) return strArr[0];
    let max = 0;
    let str = "";
    for(let i = 0; i < strArr.length; i++){
        let num = 0;
        for(let j = 0; j < strArr[i].length; j++){
            if(strArr[i][j] === char) num++;
        }
        if(num > max){
            max = num;
            str = strArr[i];
        }
    }
    return str;
}
console.log(maxOccurence("a",["appaale", "appeal", "after", "banish"]))

// Problem 2

function firstNegative(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            return i;
        }
    }
}
console.log(firstNegative([2,4,3,-1,-2,4]));

// Problem 3

function maxMarkStudent(stuArr,markArr){
    let max = -Infinity;
    let index;
    for(let i = 0; i < markArr.length; i++){
        if(markArr[i] > max){
            max = markArr[i];
            index = i;
        }
    }
    return stuArr[index];
}
console.log(maxMarkStudent(["sanjay", "priya", "ramesh", "sanjana"],[100, 45, 71, 91]));

// Problem 4

function isDivisible(arr,num){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum+=arr[i];
    }
    return sum%num == 0 ? `It is Divisible by ${num}`: `It is not Divisible by ${num}`
}
console.log(isDivisible([4,3,5],11));

// squareRoot

function squareRoot(num){
    return num / 2
}
console.log(squareRoot(5));

function distinctVowelCheck(str){
    let vowelArr = ["a","e","i","o","u"];
    let vowelPresented = [];

    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < vowelArr.length; j++){
            if(vowelArr[j] === str[i] && !vowelPresented.includes(str[i])){
                vowelPresented.push(str[i]);
            }
        }
    }
    return vowelPresented.length;
}
console.log(vowelCheck("cooleee"));