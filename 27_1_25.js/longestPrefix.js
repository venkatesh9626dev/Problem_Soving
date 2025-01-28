var longestCommonPrefix = function(arr) {
    let ar_index = 0;
    let letter_index = 0;
    let letter = arr[ar_index][letter_index];

    console.log(arr[ar_index].length);
    

    let str = "";

    if(arr.length === 1 ){
        return arr[0]
    }

    if(letter === undefined){
        return "";
    }

    while(true){

        if(arr.length === ar_index && letter_index === arr[0].length ){
            return str;
        }
        
        if(arr.length === ar_index){
            ar_index = 0;
            letter_index++;
            str+=letter;
            letter = arr[ar_index][letter_index];
            
        }

        if(arr[ar_index][letter_index] === letter){
            ar_index++;
        }
        else{
            break
        }
    }
    return str;
};


