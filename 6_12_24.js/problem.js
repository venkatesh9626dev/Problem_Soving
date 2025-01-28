function timeInWords(h, m) {
    const minutes = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty one",
  22: "twenty two",
  23: "twenty three",
  24: "twenty four",
  25: "twenty five",
  26: "twenty six",
  27: "twenty seven",
  28: "twenty eight",
  29: "twenty nine",
  30: "thirty",
};



    let hourName = minutes[h];
    if(m === 0){
        return `${hourName} o' clock` 
    }
    else if(m === 1) {
        return `one minute past ${hourName}`
    }
    else if(m === 15){
        return `quarter past ${hourName}`
    }
    else if(m === 30){
        return `half past ${hourName}`
    }
    else if(m === 45){
        return `quarter to ${minutes[h + 1]}`
    }
    else if(m < 30){
        return `${minutes[m]} minutes past ${hourName}`
    }
    else if (m > 30){
        let diff = 60 - m;
        if(diff === 1){
            return `${minutes[diff]} minute to ${minutes[h + 1]}`
        }
        return `${minutes[diff]} minutes to ${minutes[h + 1]}`
    }
    

}


function breakingRecords(scores) {
    
    let result = [0,0]
    let max = scores[0];
    let min = scores[0];
    for(let i = 1; i < scores.length; i++){
        if(scores[i] > max){
            max = scores[i];
            result[0]+=1;
        }
        else if(scores[i] < min){
            min = scores[i];
            result[1]+=1;
        }
    }
    return result;
}