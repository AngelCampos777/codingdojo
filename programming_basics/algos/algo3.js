// ALL ALGORITHMS SHOULD BE WRITTEN AS FUNCTIONS


// 1. Print 1-255
// print1To255()
// Print all the integers from 1 to 255

// function printNum(num1,num2){
//     for(i = num1;i <= num2;i++){
//         console.log(i)
//     }
// }
// printNum(1,255);

// // 2. Print Odds 1-255
// // PrintOdds1To255()
// // Print all odd integers from 1 to 255. 


// function printOddNum(num1,num2){
//     for(i = num1;i <= num2;i += 2){
//         if(i % 2 == 1);{
//         console.log(i);
//         }
//     }
// }
// printOddNum(1,255)

// // 3. Print Ints and Sum 0-255
// // PrintIntsAndSum0To255()
// // Print integers from 0 to 255, and with each integer print the sum so far. 

// function PrintIntsAndSum0To255(num1,num2){
//     var counter = 0
//     for(i = num1;i <= num2;i++){
//         console.log(i);
//         var sum = counter + i;
//         console.log(sum);
//         counter = sum;
//     }
// }
// PrintIntsAndSum0To255(1,255);




var numArr1 = [3, 4, 5, 6]
var numArr2 = [51, 3, 13, 9, 4, 1, 2, 10, 12, 7, 52]
var numArr3 = [3, -5, 2, -7, 8, 10, -2, 6, -4]
// // 4. Iterate and Print Array
// // Iterate through a given array, printing each value. 
// // PrintArrayVals(arr)

// function iterateAndPrint(arr){
//     for(i = 0;i < arr.length; i++){
//         console.log(arr[i]);
//     }
// }
// iterateAndPrint(numArr1);
// iterateAndPrint(numArr2);
// iterateAndPrint(numArr3);



// // 5. Find and Print Max
// // PrintMaxOfArray(arr)
// // Given an array, find and print its largest element. 

// function PrintMaxOfArray(arr){
//     hiNum = 0
//     for(i = 0; i < arr.length; i++){
//         if(hiNum < arr[i]){
//             hiNum = arr[i];
//         }
//     }console.log(hiNum);
// }
// PrintMaxOfArray(numArr2);

// // 6. Get and Print Average
// // PrintAverageOfArray(arr)
// // Analyze an array’s values and print the average.

// function PrintAverageOfArray(arr){
//     var sum = 0
//     for(i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }console.log(sum/arr.length);
// }
// PrintAverageOfArray(numArr3);




var arr1 = [2, 5, 3, 1, 2]
var arr2 = [2, 5, 3, 1, 2, 3]
var arr3 = [2, 5, 3, -1, 2, 3]


// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).

// function ReturnOddsArray1To255(){
//     Arr = []
//     for(i = 1;i <= 255;i++){
//         if(i % 2 == 1){
//         Arr.push(i);
//         }
//     }
//     return Arr;
// }

// console.log(ReturnOddsArray1To255());


// 8. Square the Values How to square:num ** 2
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
// var arr = [2, 5, 3, 1, 2]
// output: [4, 25, 9, 1, 4]

// function SquareArrayVals(arr){
//     for(i = 0;i < arr.length; i++){
//        arr[i] = arr[i] ** 2;
//     }return arr;
// }
// console.log(SquareArrayVals(arr1));

// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.

// function ReturnArrayCountGreaterThanY(arr, y){
//     counter = 0
//     for(i = 0;i < arr.length; i++){
//         if(arr[i] > y){
//             counter++;
//         }
//     }return(counter);
// }
// console.log(ReturnArrayCountGreaterThanY(arr3, 1))

// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero
var numArr3 = [3, -5, 2, -7, 8, 10, -2, 6, -8, 11];
// output:  [3, 0, 2, 0, 8, 10, 0, 6, 0];

// function ZeroOutArrayNegativeVals(arr){
//     for(i = 0;i < arr.length; i++) {
//         if(arr[i] < 0){
//             arr[i] = 0;
//         }
//     }
//     return (arr);
// }
    
// console.log(ZeroOutArrayNegativeVals(numArr3));


// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.

// function PrintMaxMinAverageArrayVals(arr){
//     var max = 0
//     var min = 0
//     var sum = 0
//     for(i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//         if(arr[i] >= max){
//             max = arr[i];
//         }
//         if(arr[i] <= min){
//             min = arr[i];
//         }
//     }
//     return [max,min,sum/arr.length]
// }
// console.log(PrintMaxMinAverageArrayVals(numArr3));



// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
var arr = [2, 5, 3, 1, 2, 7, 7, 7, 7, 7]
// output: [5, 3, 1, 2, 0]

// function ShiftArrayValsLeft(arr){
//     for(i = 0;i < arr.length; i++){
//         arr[i] = arr[i+1];
//         }arr.pop();
//         arr.push(0);
//         return (arr)
// }

// console.log(ShiftArrayValsLeft(numArr3));
// console.log(ShiftArrayValsLeft(arr));


// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
// var numArr3 = [3, -5, 2, -7, 8, 10, -2, 6, -4];
// output: [3, "Dojo", 2, "Dojo", 8, 10, "Dojo", 6, "Dojo"];

// function SwapStringForArrayNegativeVals(arr){
// for(i = 0;i < arr.length; i++){
//     if(arr[i] < 0){
//         var temp = "dojo";
//         arr[i] = temp;
//     }
// }console.log(arr);
// return (arr);
// }

// SwapStringForArrayNegativeVals(numArr3);