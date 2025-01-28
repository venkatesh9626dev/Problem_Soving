function getTotalX(a, b) {
    
    // max number
    
   let max = b[0];
   b.forEach((element)=>{
    if(element > max) max = element
   })
   
   // finding dividers
   let dividerArr = [];
   
   for(let i = 2; i <=max; i++){
    let count = 0;
    for(let j = 0; j < b.length; j++){
        if(b[j]%i === 0){
           count++;
        } 
        else{
            break;
        }
    }
    if(count === b.length) dividerArr.push(i)
   }

    console.log(dividerArr);
    
   
   let result = 0;
   
   for(let i = 0; i < dividerArr.length; i++){
    let count = 0;
    for(let j = 0; j < a.length; j++){
        if(dividerArr[i] % a[j]=== 0){
           count++;
        } 
        else{
            break;
        }
    }
    if(count === a.length) result++
   }
   
   return result;
}
getTotalX([1],[100]);