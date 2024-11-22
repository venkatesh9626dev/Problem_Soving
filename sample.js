function pattern1 (n){
  let totalStr = n * 2;
  for(let i = 1; i <=n ; i++){
    let char = [];
    for(let j = i * 2 ; j >0 ; j--){
      char.push(i);
    }
    let gap = "";
    for(let k = totalStr - i *2; k > 0; k--){
      gap+= " ";
    }
    char.splice(i,0,gap);
    let result  = char.join("");
    console.log(result);
    
  }
}
pattern1(3);