function largeStr(strArr){
    let maxLen = -Infinity;
    let longStr ;

    for(let i = 0; i < strArr.length; i++){
        if(strArr[i].length > maxLen){
            maxLen = strArr[i].length;
            longStr = strArr[i];
        }
    }
    return longStr;
}
console.log(largeStr(["venkat","venkatesh","raja","arnold"]));

// Problem 2

function firstCharCheck(char,strArr){
    let result = [];
    let small;
    let caps;
    if(char > "Z"){
        caps = char.charCodeAt(0) -32;
        small = char.charCodeAt(0);
    }
    else{
        caps = char.charCodeAt(0);
        small = char.charCodeAt(0) + 32;
    }
    for(let i = 0; i <strArr.length; i++){
        if(strArr[i][0].charCodeAt(0) === small || strArr[i][0].charCodeAt(0) === caps){
            result.push(strArr[i]);
        }
    }
    return result;
}
console.log(firstCharCheck("A",["venkat","apple","Apple"]))

// Problem 3

function reverseString(str){
    let result = "";
    for(let i = str.length -1; i >= 0; i--){
        result += str[i];
    }
    return result;
}
console.log(reverseString("venkat"));

