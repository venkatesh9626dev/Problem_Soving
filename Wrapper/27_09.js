
// Problem 1

let arr = [23,56,54,55,65,43,25,30];

function multiplesOf5(arr){
    let result_arr = arr.filter((num) =>{ return num % 5 === 0});

    return result_arr;
}



console.log(multiplesOf5(arr));

// Problem 2

function findingNumbers(arr,a,b){

let result_arr = arr.filter( (num) => { return num >= a && num <= b});

return result_arr.length;

}

console.log(findingNumbers(arr,30,50));

// Problem 3

let name_arr = ["arjun","udhaya","jeeva"];

function isVowel(name_arr){

    let str_arr = ["a","e","i","o","u"];

    let result = name_arr.filter( ( str ) => {

      return  str_arr.includes(str[0] || str[0].toLowerCase());
    }
  );

  return result;

}

console.log(isVowel(name_arr));

// Problem 4

let float_arr = [34.3,4.3,4.3,34.4,34.5];

function averageFloat(float_arr){

  let sum = 0;

  for ( let num of float_arr){
    sum+=num;
  }

  return Math.trunc(sum / float_arr.length);
}

console.log(averageFloat(float_arr));