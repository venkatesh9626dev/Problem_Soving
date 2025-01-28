function sockMerchant(ar) {
    let obj = {};
    for(let i = 0; i < ar.length; i++){
     obj[ar[i]] = (obj[ar[i]] || 0) + 1;
    }
    let pair =0;
    for(let key in obj){
     if(obj[key] % 2 !== 0){
         pair+= Math.trunc(obj[key] / 2)
     }
     else{
        pair+= obj[key] / 2;
     }
    }
    return pair;
 }
 console.log(sockMerchant([1,2,1,1,2,1,3,2]))