// arr.length - 3
// var a = [1,2,3,4,5,6] 
// b = [5,6,1,2,3,4]
// export function rotateArray(arr, shiftBy) {
//     let newArr =  []
//     for(var i = arr.length - shiftBy ; i < arr.length ; i++){
//         newArr.push(arr[i]);
//     }for(var j = 0 ; j < arr.length - shiftBy ; j++){
//         newArr.push(arr[j]);
//     // Write your solution here!
//     }return newArr;
// }
// console.log(rotateArray(a, 3));

// function arrayBalanceIndex(arr) {

//     if (arr.length < 3) {
//         return -1
//     }
//     for (var i = 1; i < arr.length - 1; i++) {
//         var sumL = 0;
//         var sumR = 0;
//         for (var j = 0; j < i; j++) {
//             sumL += arr[j];
//         }
//         for (var k = i + 1; k < arr.length; k++) {
//             sumR += arr[k];
//         }
//         if (sumL == sumR) {
//             return i
//         }
//     } 
//     return -1;
// }
// x = [3,4,9,2,4,-2,3]
// console.log(arrayBalanceIndex(x));
function bubbleSort(arr) {
    for (var j = 0; j < arr.length; j++) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}
