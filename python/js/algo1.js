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
function selectionSort(arr) {
    for (var x = 0; x < arr.length; x++) {
        var biggestNumber = arr[0]
        var indexBigNumber = 0;
        for (var y = 0; y < arr.length - x; y++) {
            if (arr[y] > biggestNumber) {
                biggestNumber = arr[y];
                indexBigNumber = y;
            }
        }
        let temp = arr[arr.length - 1 - x]
        arr[arr.length - 1 - x] = biggestNumber;
        arr[indexBigNumber] = temp;
    }
    return arr;
}
export function selectionSort(arr) {

    for (var i = arr.length - 1; i >= 0; i--) {

        var maxNumber = arr[0];
        var maxPosition = 0;

        for (var j = 0; j <= i; j++) {
            if (arr[j] > maxNumber) {
                maxNumber = arr[j];
                maxPosition = j;
            }
        }

        var temp = arr[i];
        arr[i] = maxNumber;
        arr[maxPosition] = temp;

    }

    return arr;
}
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

export function deduplicateSortedArray(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1]) {
            newArr.push(arr[i]);
        }
    } arr.length = 0;
    for (const x of newArr) {
        arr.push(x);
    }
    return arr
}
export function deduplicateSortedArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            arr.splice(i + 1, 1);
            i -= 1;
        }
    }
    return arr
}
// this is the most optimal, but hardest to understand
// basically, shifts all non-duplicates to the front, then chops off the remainder
function deduplicateSortedArray(arr) {
    var dupes = 0;
    var temp;
    for (var i = 0; i < arr.length; i++) {
        console.log(arr);
        if (arr[i] === temp) {
            dupes++;
        } else {
            arr[i - dupes] = arr[i];
        }
        temp = arr[i];
    }
    arr.length -= dupes;
    return arr;
}