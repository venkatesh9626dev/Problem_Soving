const twoDArray1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const twoDArray2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
function addMatrix(arr1,arr2){
   let newArr = [[],[],[]];

   for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr1[i].length; j++){
        newArr[i][j] = arr1[i][j] + arr2[i][j]
    }

   }
   return newArr
}
console.log(addMatrix(twoDArray1,twoDArray2))

// multiplication matrix

function multiMatrix(arr){
    let sum = 1;
    for(let i = 0; i < arr.length;i++){
        for(let j = 0; j < arr[i].length;j++){
            sum*=arr[i][j];
        }
    }
    return sum
}
console.log(multiMatrix(twoDArray))

// finding max salary person

