// Problem 1

function isVowel(char){
    let result ;
    let vowels_arr = ["a","e","i","o","u"];
    if (vowels_arr.includes(char) || vowels_arr.includes(char.toLowerCase())){
        result = "This Character is a Vowel"
    }
    else{
        result = "This Character is a consonant"
    }
    return result;
}
let char = "b";
console.log(isVowel(char));

// Problem 2

function isMaximum(num_arr){
    return Math.max(...num_arr);
}

let num_arr = [30,90,59]
console.log(isMaximum(num_arr));

// Problem 3

function seriesMaking(n){
    let result = "";sdf
    let increment = 1;

    for (let i = 0; i <n; i++){
        result = result + increment + " "
        increment = increment + 2;
    }
    return result;
}
console.log(seriesMaking(20));

// Problem 4

function dailyIncrease(init,days){
    let result = init;
    for ( let i = 1; i < days; i++){
        result+=2;
    }

    return result + "%";
}
console.log(dailyIncrease(7,10));

// Problem 5

function printMultiplesOf5(a,b){

    let result = "";
    for (let i = b; i>=a;i--){
        if(i % 5 === 0){
            result+=i+" ";
        }
    }
    return result;
}

console.log(printMultiplesOf5(11,30));


