// 1Print odds 1 - 20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.

// function printOdds(){
//     for(i = 1; i <= 20; i++){
//         if(i % 2 == 1){
//             console.log(i);
//         }
//     }
// }
// printOdds();
// 2Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are 
// evenly divisible by 3 from 100 down to 0.

// function isDivBy3(){
//     for(i = 100; i > 0; i--){
//         if(i % 3 == 0){
//             console.log(i);
//         }
//     }
// }
// isDivBy3();

// 3Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

// var arr = [4, 2.5, 1, -0.5, -2, -3.5]
// function print1(arr){
//     for(i = 0; i < arr.length; i++){
//             console.log(arr[i]);
//     }
// }
// print1(arr);

// 4Sigma
// Write code that will add all of the values from 1 - 100 onto some variable sum and at the end console.log
//  the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

// function Sum1To100(){
//     var counter = 0
//     for(i = 1; i <= 100; i++){
//         var sum = counter + i;
//         counter = sum;
//     }console.log(sum);
// }
// Sum1To100();

// 5Factorial
// Write code that will multiply all of the values from 1 - 12 onto some variable product and at the end
// console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

// function bang12(){
//     var counter = 1
//     for(i = 1; i <= 12; i++){
//         var product = counter * i;
//         counter = product;
//     }console.log(product);
// }
// bang12();

//to change to more useful function
// function bang(num){
//     var counter = 1
//     for(i = 1; i <= num; i++){
//         var product = counter * i;
//         counter = product;
//     }console.log(product);
// }
// bang(69);