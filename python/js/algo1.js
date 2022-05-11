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

// const arr3 = [];
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
    for (var i = 0; i < arr.length; i++) {
        // for(var str of arr) where str = arr[i]
        if (!expected[arr[i]]) {
            expected[arr[i]] = 1;
        } else {
            expected[arr[i]]++;
        }
    } return expected
}
// console.log(makeFrequencyTable(arr2))
/*****************************************************************************/

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

// const nums1 = [1];
// const expected1 = 1;

// const nums2 = [5, 4, 5];
// const expected2 = 4;

// const nums3 = [5, 4, 3, 4, 3, 4, 5];
// const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

// const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
// const expected4 = 1;

// function oddOccurrencesInArray(nums) {
//     const table = makeFrequencyTable(nums)

//     for (var key in table) {
//         if (table[key] % 2 != 0) {
//             return key;
//         }
//     }
// }


// console.log(oddOccurrencesInArray(nums1), "should equal", expected1);
// console.log(oddOccurrencesInArray(nums2), "should equal", expected2);
// console.log(oddOccurrencesInArray(nums3), "should equal", expected3);
// console.log(oddOccurrencesInArray(nums4), "should equal", expected4);

/* 
Given a string,
return a new string with the duplicates excluded
Bonus: Keep only the last instance of each character.
*/

// const str1 = "abcABC";
// const expected1 = "abcABC";

// const str2 = "helloo";
// const expected2 = "helo";

// const str3 = "";
// const expected3 = "";

// const str4 = "aa";
// const expected4 = "a";

/**
 * De-dupes the given string.
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
    var expected = {};
    var newStr = ""
    // for (var i = 0; i < str.length; i++) where letter = i, str = arr
    for(var letter of str) {
        if (!expected[letter]) {
            expected[letter] = 1;
        }
    } for(var letter in expected){
            newStr += letter;
        }
    return newStr
}

// function stringDedupe(str) {
//     sentances = str.split('');
//     for(var i = 0;i<arr.length;i++){
//         for(var j = 1; j < arr.length ;j++){
//         if(str[j] == str[i])
//         }
//     }
//     return sentances;
// }

// console.log(stringDedupe(str1))
// console.log(stringDedupe(str2))
// console.log(stringDedupe(str3))
// console.log(stringDedupe(str4))
/*******************************/

/* 
Given a string containing space separated words
Reverse each word in the string.
If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {    
    const words = str.split(" ");
    let wordsRev = "";

    for(const word of words){
        let revWord = "";
        for(let i = word.length - 1; i >= 0; i--){
            revWord += word[i];
        }
        if(wordsRev.len > 0){
            revWord = " " + revWord;
        }
        wordsRev = revWord
    }
    return wordsRev;
}
console.log(reverseWords(str1))
console.log(reverseWords(str2))
console.log(reverseWords(str3))
/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1a = "hello";
const expect1 = "olleh";

const str2a = "hello world";
const expect2 = "olleh dlrow";

const str3a = "abc def ghi";
const expect3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    const words = str.split(" ");
    let wordsReversed = "";

    for (const word of words) {
        let reversedWord = "";

        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }

        // add a space in front of word if it's not the first word
        if (wordsReversed.length > 0) {
            reversedWord = " " + reversedWord;
        }
        wordsReversed += reversedWord;
    }
    return wordsReversed;
}

console.log(reverseWords(str1a));
console.log(reverseWords(str2a));
console.log(reverseWords(str3a));
/***********************************/

/* 
Reverse Word Order
Given a string of words (with spaces)
return a new string with words in reverse sequence.
*/

// const str1 = "This is a test";
// const expected1 = "test a is This";

// const str2 = "hello";
// const expected2 = "hello";

// const str3 = "   This  is a   test  ";
// const expected3 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
// function reverseWordOrder(wordsStr) { }
/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1b = "This is a test";
const expec1 = "test a is This";

const str2b = "hello";
const expec2 = "hello";

const str3b = "   This  is a   test  ";
const expec3 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {
    // if all spaces
    if (wordsStr == false) {
        return wordsStr;
    }

    const words = wordsStr.split(" ");
    let reversedWordOrder = "";
    console.log(words)

    // loop backwards
    for (let i = words.length - 1; i >= 0; i--) {
        // Skip empty strings resulting from .split encountering multiple spaces.
        if (words[i] === "") {
            continue;
        }

        if (reversedWordOrder.length > 0) {
            reversedWordOrder += " ";
        }

        reversedWordOrder += words[i];
    }
    return reversedWordOrder;
}

console.log(reverseWordOrder(str1b));
console.log(reverseWordOrder(str2b));
console.log(reverseWordOrder(str3b));