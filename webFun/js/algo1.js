// var a = 25;
// a = a - 13;
// console.log(a/2);

// a = "hello";
// console.log(a + " hello");

// //Lesson 2 - Predict Loops
// for(var i=0; i<10; i++) {
//     console.log(i);
//     i = i + 3; 
// }0,4,8

// console.log("outside of the loop " + i);


// //Lesson 3 - Predict what the code does
// function getTotal(arrayOfNumbers) {

//   var sum = arrayOfNumbers[0];

//   for(var i=0; i<arrayOfNumbers.length; i++) {
//     sum += arrayOfNumbers[i];
//     console.log("the current sum is: " + sum); 
//   }

//   console.log("the total is: " + sum);

// }

// getTotal([1, 3, 5]);
// current 2
// current 5
// current 10
// total 10

// // Always isSunny
// var isSunny = true;
// var temperature = 45; // let's assume degrees Fahrenheit
// var isRaining = false;
// var whatToBring = "I should bring: ";

// if (isSunny) {
//     whatToBring += "sunglasses, ";
// }
// if (temperature < 50) {
//     whatToBring += "a coat, ";
// }
// if (isRaining) {
//     whatToBring += "an umbrella, ";
// }
// whatToBring += "and a smile!";

// console.log(whatToBring); 
// //ishouldbring:sunglassesacoatandasmile!

// //Prepare for downcount
// for (var i = 10; i > 0; i--) {
//     if (i != 2) {
//         console.log(i);
//     } else {
//         console.log("ignition!");
//     }
// }

// console.log("liftoff!");
// //10 9 8 7 6 5 4 3 ignition! 1 liftoff!

// // //Count positives
// // var countPositives = 0;
// var numbers = [3, 4, -2, 7, 16, -8, 0];

// // // your code here!
// // for(i = 0;i < arr.length; i++){
// //     if(i > 0){
// //         countPositives++;
// //     }
// // }

// // console.log("there are " + countPositives + " positive values");

// function countPos(arr){
//     countPos = 0;
//     for(i = 0;i < arr.length; i++){
//         if(arr[i] > 0){
//             countPos++;
//         }
//     }return ("there are " + countPos + " positive numbers.")
// }
// console.log(countPos(numbers));

// var x = 5;

// function setX(newValue) {
//     x = newValue; 
// }
    
// console.log(x); 5
// setX(15);
// console.log(x); 15
// //The Return of return

// // var x = 5;
    
// function addToX(amount) {
//     return x + amount;
//     console.log("hello there");
// }
    
// console.log(x); 5
// var result = addToX(-10); -5
// console.log(result); -5
// console.log(x); 5

// //palindrome?

// function isPal(arr) {
//     for(var left=0; left<arr.length/2; left++) {
//         var right = arr.length-1-left;
//         if(arr[left] != arr[right]) {
//             return "Not a pal-indrome!";
//         }
//     }
//     return "Pal-indrome!";
// }
    
// var result1 = isPal( [1, 1, 2, 2, 1] ); 
// console.log(result1); not
    
// var result2 = isPal( [3, 2, 1, 1, 2, 3] );
// console.log(result2); is 

//
// function isPal(string){
//     var newString = ""
//     for(i = string.length - 1; i >= 0; i--){
//         newString+=string[i];
//         console.log(newString);
//     }
//     if(newString == string){
//         return "palindrome!";
//     }return "not quite...";
// }
// x = "racecar";
// y = "llama"
// console.log(isPal(x));
// console.log(isPal(y));
//

// var fruit1 = "apples";
// var fruit2 = "oranges";
    
// var temp = fruit1; // temp is a common name for this
// fruit1 = fruit2;
// fruit2 = temp;
    
// console.log(fruit2 + " and " + fruit1);
//"oranges" and "apples"

// var start = 0;
// var end = 12;
    
// while(start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }



// Reversing an array
// Write a function reverse( arr ) to reverse an array, if we were given...

// arr1 = ["a", "b", "c", "d", "e"];
// we expect to get back...

// arr2 = ["e", "d", "c", "b", "a"];


// function revArray(arr){
//     newArr = [];
//     for(i = arr.length - 1; i >= 0; i--){
//         newArr.push(arr[i]);
//     }return newArr;
// }

// console.log(revArray(arr1));
// console.log(revArray(arr2));

// function revArr(arr){
//     temp = [];
//     for(i = 0; i < arr.length; i++){
//         temp[i] = arr[arr.length-1-i];
//     }return (temp)
// }

// console.log(revArr(arr1));
// console.log(revArr(arr2));

// function reverse(arr){
//     for(x = 0; x < arr.length/2; x++){
//         var y =arr.length - 1 - x;
//         var temp = arr[x];
//         arr[x] = arr[y];
//         arr[y] = temp;
//     }
// }