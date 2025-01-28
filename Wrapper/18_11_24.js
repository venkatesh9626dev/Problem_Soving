let arr = [24,32,23,2];

function insertFtn(element,index){
    if(index >=arr.length){
        arr[index] = element;
        return arr;
    }
   
    for(let j = arr.length; j >index;j--){
        arr[j] = arr[j-1];
    }
    arr[index] = element;
    return arr;
        
    
}
console.log(insertFtn(14,4));

function removeFtn(index){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(i != index){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(removeFtn(2));