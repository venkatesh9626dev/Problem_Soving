function pattern1(n){
    let current = 1;
    let step = 1;
    let result = "";
    while (step > 0){
        for (let i = step; i > 0; i--){
            if(current > n){
                return result;
            }
            else{
                result+=current + " ";
                current++;
            }
        }
        result+= "\n";
        step++;
    }
}
console.log(pattern1(16));

function pattern2(n){
    let result = "";
    for (let i = n; i > 0; i--){
        for(let j = 1; j <=i; j++){
            result += j + " ";
        }
        result+="\n";
    }
    return result;
}
console.log(pattern2(5));

function pattern3(n){
    for ( let i = 1; i <= n; i+=2){
        let char = "";
        let gap = "";
        for ( let j = 1; j <=i; j++){
            char+=j+" ";
        }
        for( let k = n-i; k > 0; k--){
            gap+=" ";
        }
        console.log((gap+ char));
    }

}
pattern3(11);

let rows = 3;
let variable = 1;
let count= 1;

for (let i = 1; i <= rows; i++){
    let str ="";
    for(let j = count; j > 0 ;j--){
        str+=variable;
        variable++;
    }
    let gap = "";
    for(let k = rows - i; k > 0; k--){
        gap+=" ";
    }
    console.log(gap+str);
    count+=2;
}



