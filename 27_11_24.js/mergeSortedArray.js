let arr=[10,4,3,1]
function largeThree(arr) {
    let obj={}
    arr.forEach(e => {
        if(!obj[1]) obj[1]=e
        else if(!obj[2]) obj[2]=e;
        else if(!obj[3]) obj[3]=e;
        let min=1;
        if(obj[1]&&obj[2]&&obj[3]){
            if(obj[2]<obj[3] && obj[2]<obj[1])  min=2;
            else if(obj[3]<obj[1]) min=3;
            if(obj[min] < e){
                obj[min] = e
            }
        }
    });
    arr=[obj[1],obj[2],obj[3]];
    return arr;
}
console.log(largeThree(arr));