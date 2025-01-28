// // Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// //

function birthday(s, d, m) {
    let count = 0;
    let i = 0;
    let j = i +(m -1) ;
    
    while(j < s.length){
        let sum = 0;
        for(let z = i; z <=j; z++){
            sum+=s[z]
        }
        if(sum === d) count++;
        i++;
        j = i + (m-1)
    }
    return count;

}