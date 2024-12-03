let arr1 = [
    [8,4,5],
    [1,3,8],
    [2,1,2]
];

let arr2 = [
    [9,3,4],
    [2,1,3],
    [4,0,2]
]

function matrixMulti(arr1,arr2){
    let result = [];
    for(let i = 0; i < arr1.length; i++){
        result.push([]);
        for(let j = 0; j < arr1[i].length; j++){
            let sum = 0;
            for(let k = 0; k < arr2.length; k++){
                sum += arr1[i][k] * arr2[k][j]
            }
            result[i][j] = sum;
        }
    }
    return result;
}

console.log(matrixMulti(arr1,arr2))