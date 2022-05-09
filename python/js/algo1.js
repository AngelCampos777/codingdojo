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
// function bubbleSort(arr) {
//     for (var j = 0; j < arr.length; j++) {
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 var temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// function selectionSort(arr) {
//     for (var x = 0; x < arr.length; x++) {
//         var biggestNumber = arr[0]
//         var indexBigNumber = 0;
//         for (var y = 0; y < arr.length - x; y++) {
//             if (arr[y] > biggestNumber) {
//                 biggestNumber = arr[y];
//                 indexBigNumber = y;
//             }
//         }
//         let temp = arr[arr.length - 1 - x]
//         arr[arr.length - 1 - x] = biggestNumber;
//         arr[indexBigNumber] = temp;
//     }
//     return arr;
// }
// export function selectionSort(arr) {

//     for (var i = arr.length - 1; i >= 0; i--) {

//         var maxNumber = arr[0];
//         var maxPosition = 0;

//         for (var j = 0; j <= i; j++) {
//             if (arr[j] > maxNumber) {
//                 maxNumber = arr[j];
//                 maxPosition = j;
//             }
//         }

//         var temp = arr[i];
//         arr[i] = maxNumber;
//         arr[maxPosition] = temp;

//     }

//     return arr;
// }
// mine didnt work extra value
// export function selectionSort(arr) {
//     for(var i = arr.length; i >= 0; i--){
//         var max_int = arr[0];
//         var max_p = 0;
//       for(var j = 0; j <= i; j++){
//         if (arr[j] > max_int){
//           max_int = arr[j];
//           max_p = j;
//         }
//       }
//       var temp = arr[i];
//       arr[i] = max_int;
//       arr[max_p] = temp;
//     }
//     return arr
// }

// export function deduplicateSortedArray(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] != arr[i + 1]) {
//             newArr.push(arr[i]);
//         }
//     } arr.length = 0;
//     for (const x of newArr) {
//         arr.push(x);
//     }
//     return arr
// }
// export function deduplicateSortedArray(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i + 1]) {
//             arr.splice(i + 1, 1);
//             i -= 1;
//         }
//     }
//     return arr
// }
// // this is the most optimal, but hardest to understand
// basically, shifts all non-duplicates to the front, then chops off the remainder
// function deduplicateSortedArray(arr) {
//     var dupes = 0;
//     var temp;
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr);
//         if (arr[i] === temp) {
//             dupes++;
//         } else {
//             arr[i - dupes] = arr[i];
//         }
//         temp = arr[i];
//     }
//     arr.length -= dupes;
//     return arr;
// }

/* 
    Given an array of strings
    return the number of times each string occurs (a frequency / hash table)
*/

// const arr1 = ["a", "a", "a"];
// const expected1 = {
//     a: 3,
// };

// const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
// const expected2 = {
//     a: 2,
//     b: 1,
//     c: 3,
//     B: 1,
//     d: 1,
// };

const arr3 = [];
// const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
//  */
function makeFrequencyTable(arr) {
    var expected = {};
    for(var i = 0; i < arr.length; i++){
    // for(var str of arr) where str = arr[i]
        if(!expected[arr[i]]){
            expected[arr[i]] = 1;
        }else{
            expected[arr[i]]++;
        }
    }return expected
}
// console.log(makeFrequencyTable(arr2))
/*****************************************************************************/

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {
    const table = makeFrequencyTable(nums)
    
    for(var key in table) {
        if(table[key] % 2 != 0){
            return key;
        }
    }
}


console.log(oddOccurrencesInArray(nums1), "should equal", expected1);
console.log(oddOccurrencesInArray(nums2), "should equal", expected2);
console.log(oddOccurrencesInArray(nums3), "should equal", expected3);
console.log(oddOccurrencesInArray(nums4), "should equal", expected4);