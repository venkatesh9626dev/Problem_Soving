function sort012(arr) {
    let  intObj ={};
    
    arr.forEach((e)=>{
        intObj[e] = (intObj[e] || 0 ) + 1
    })
    
    
    
    let resultArr = "";
    
    for(let key in intObj){
        for(let i = 0; i < intObj[key]; i++){
            resultArr+= " "+ key
        }
    }
    
    
   return resultArr
}   

console.log(sort012([0, 1, 2, 0, 1, 2]))