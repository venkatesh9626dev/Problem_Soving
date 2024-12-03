var isSubsequence = function(s, t) {
    
    let j = 0;
    for(let i = 0; i < s.length; i++){
        let count = 0;
        while( j < t.length){
            if(s[i] === t[j]){
                count++;
                break;
                j++;
            }
            else{
                j++;
            }
        }
        if(count === 0){
            return false
        } 
        
    }
    return true;
};
console.log(isSubsequence("aaaaaa","bbaaaa"))