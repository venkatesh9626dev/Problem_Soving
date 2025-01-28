// // SELECTION SORT

// function selection_sort(arr){
//     for(let i = 0; i < arr.length; i++){
//         let min = i;
//         for(let j = i+ 1; j < arr.length; j++){
//             if(arr[j] < arr[min] ){
//                 min = j;
//             }
//         }
//         let temp = arr[i]
//         arr[i] = arr[min];
//         arr[min] = temp
//     }
//     return arr;
// }



// console.log(selection_sort([1,2,5,2,90,12,100,1]));
// console.log(selection_sort(["venkat","venkatesh","apple","aala"]));


// // seletion sort for objects

// function selection_sort_object(obj){
//     for(let i = 0; i < obj.length; i++){
//         let count = 0;
//         let min = i;
//         for(let j = i+1; j < obj.length; j++){
//             if(obj[j].salary < obj[min].salary){
//                 min = j;
//                 count++;
//             }
//         }
//         if(count > 0){
//             let temp = obj[i];
//             obj[i] = obj[min];
//             obj[min] = temp;
//         }
//     }
//     return obj;
// }

// console.log(selection_sort_object([
//     { username: "john_doe", age: 28, salary: 50000 },
//     { username: "jane_smith", age: 34, salary: 75000 },
//     { username: "alex_jones", age: 22, salary: 42000 },
//     { username: "maria_garcia", age: 40, salary: 90000 },
//     { username: "william_brown", age: 30, salary: 62000 },
//     { username: "sophia_lee", age: 27, salary: 58000 },
//     { username: "daniel_wu", age: 31, salary: 71000 },
//     { username: "olivia_chen", age: 25, salary: 55000 }
// ]))

