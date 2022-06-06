/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else
  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

// const nums1 = [3, 5, 4, 3, 4, 6, 5];
// const expected1 = 6;

// const nums2 = [3, 5, 5];
// const expected2 = 3;

// const nums3 = [3, 3, 5];
// const expected3 = 5;

// const nums4 = [5];
// const expected4 = 5;

// const nums5 = [];
// const expected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */

// function firstNonRepeated(nums) {
//     if (nums.length < 1) {
//         return null;
//     }
//     var expected = {};
//     for (var num of nums) {
//         if (!expected[num]) {
//             expected[num] = 1;
//         } else {
//             expected[num]++;
//         }
//     }
//     console.log(expected)
//     for (var num of nums) {
//         if (expected[num] == 1) {
//             return num;
//         }
//     }
// }
// console.log(firstNonRepeated(nums1))
// console.log(firstNonRepeated(nums2))
// console.log(firstNonRepeated(nums3))
// console.log(firstNonRepeated(nums4))
// console.log(firstNonRepeated(nums5))

// function bookIndex(pages) {
//     var strArr = [];
//     var str = "";
//     var seqStart;

//     for (var i = 0; i < pages.length; i++) {
//         seqStart = pages[i]
//         var seqEnd = undefined;

//         for (var j = i + 1; j < pages.length; j++) {
//             if (pages[j] == pages[j - 1] + 1) {
//                 seqEnd = pages[j];
//                 if (j == pages.length - 1) {
//                     i = j;
//                     break;
//                 }
//             } else if (seqEnd == undefined) {
//                 i = j - 1;
//                 break;
//             } else {
//                 i = j - 1;
//                 break;
//             }
//         }
//         if (seqEnd != undefined) {
//             strArr.push('' + seqStart + '-' + seqEnd)
//         } else {
//             strArr.push('' + seqStart)
//         }
//     }
//     for (var k = 0; k < strArr.length; k++) {
//         if (k == strArr.length - 1) {
//             str += strArr[k]
//         } else {
//             str += strArr[k] + ", ";
//         }
//     }

//     return str;

// }

// function recursiveSigma(input) {
//     if (input <= 0) {
//         return 0;
//     } else {
//         return input + recursiveFactorial(input - 1);
//     }
// }

// function recursiveFactorial(input) {
//     if (input <= 1) {
//         return 1;
//     } else {
//         return input * recursiveFactorial(input - 1);
//     }
// }
// function fibonacci(n) {
//     if (n < 0) {
//         return console.log("positive only, please.")
//     }
//     if (n <= 0) {
//         return 0;
//     }
//     if (n <= 1) {
//         return 1;
//     } else {
//         var sum = fibonacci(n - 1) + fibonacci(n - 2);
//         return sum
//     }
// }
/* 
    Recursively reverse a string
    helpful methods:
    str.slice(beginIndex[, endIndex])
    returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str) {
    if (str.length == 0) {
        return ""
    }
    var newStr = str.slice(1);
    console.log(newStr)
    var keep = str[0];
    console.log(keep)
    return reverseStr(newStr) + keep
}
// console.log(reverseStr("lobotemy"))

/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
// const expected1 = false;

const nums2 = [4, 5, 6, 8, 12, 32, 45, 47, 49, 50, 53];
const searchNum2 = 5;
// const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
// const expected3 = true;

const nums4 = [3];
const searchNum4 = 3;
// const expected4 = true;

const nums5 = [];
const searchNum5 = 3;
// const expected5 = false;

const nums6 = [8];
const searchNum6 = 3;
// const expected6 = false;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum) {
    if (sortedNums.length == 0) {
        return false;
    } else if (sortedNums.length == 1 && sortedNums[0] != searchNum) {
        return false;
    } else if (sortedNums.length == 1 && sortedNums[0] == searchNum) {
        return true;
    }
    var halfway = Math.floor(sortedNums.length / 2);

    if (sortedNums[halfway] == searchNum) {
        return true;
    } else if (sortedNums[halfway] > searchNum) {
        return binarySearch(sortedNums.slice(0, halfway), searchNum);
    } else if (sortedNums[halfway] < searchNum) {
        return binarySearch(sortedNums.slice(halfway), searchNum);
    }
}
// console.log(binarySearch(nums1, searchNum1));
// console.log(binarySearch(nums2, searchNum2));
// console.log(binarySearch(nums3, searchNum3));
// console.log(binarySearch(nums4, searchNum4));
// console.log(binarySearch(nums5, searchNum5));
// console.log(binarySearch(nums6, searchNum6));

function binarySearch2(sortedNums, searchNum, left = 0, right = sortedNums.length) {
    if (sortedNums.length < 1) {
        return -1;
    }
    // as long as our indices are at least 2 elements apart, continue recursion 
    if (right - left > 1) {
        // declare midpoint
        var mid = Math.floor((right + left) / 2);

        if (sortedNums[mid] == searchNum) {
            return mid
        }
        if (searchNum < sortedNums[mid]) {
            return binarySearch(sortedNums, searchNum, left, right = mid);
        }
        return binarySearch(sortedNums, searchNum, left = mid + 1, right);
    }
    return sortedNums[left] == searchNum ? left : -1;
}
// console.log(binarySearch2(nums1, searchNum1));
// console.log(binarySearch2(nums2, searchNum2));
// console.log(binarySearch2(nums3, searchNum3));

/* 
  Binary String Expansion
  You are given a STRING containing chars "0", "1", and "?"
  For every "?" character, either "0" or "1" can be substituted.
  Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1". 
*/

const strA = '1100?';
const strB = '??01';
const strC = '?0101';
const strD = '0101';

// function binaryStringExpansion(str, left = 0, right = str.length) {
//     newArr = [];
//     temp = ''
//     if(str.length == 0){
//         return "";
//     }
//     if (right - left > 1){
//         var mid = Math.floor((right + left)/2);
//     if(str[mid] === '?'){
//         str[mid] = 0;
//         temp = str;
//         newArr.push(temp);
//         str[mid] = 1;
//         temp = str;
//         newArr.push(temp);
//     }
//     if (str[mid] ) {
//         return binaryStringExpansion(str, left, right = mid);
//     }
//     return binaryStringExpansion(str, left = mid + 1, right);
//     }
//     return str[left] == str ? left : -1;
// }

// function print(str, index) {
//     if (index === str.length) {
//         str.join("") + "<br>";
//         return;
//     }

//     if (str[index] === "?") {
//         // replace '?' by
//         // '0' and recurse
//         str[index] = "0";
//         print(str, index + 1);

//         // replace '?' by
//         // '1' and recurse
//         str[index] = "1";
//         print(str, index + 1);

//         // NOTE: Need to backtrack
//         // as string is passed by
//         // reference to the function
//         str[index] = "?";
//     } else print(str, index + 1);
// }

// // Driver Code

// var input = "1??0?101";
// var str = input.split("");
// console.log(print(str, 0));

function binaryStringExpansion(str, solutions = [], partial = "") {
    const index = str.indexOf("?"); //indexOf returns the first string occurrence of a substring

    if (index < 0) {
        solutions.push(partial + str);
    } else {
        const front = str.slice(0, index); // Returns a section of the string
        const back = str.slice(index + 1); //Returns a section of the string
        const prefix = partial + front; //Slice of a string being processed

        binaryStringExpansion(back, solutions, prefix + "0"); //recursion
        binaryStringExpansion(back, solutions, prefix + "1"); //recursion
    }
    return solutions;
}
console.log(binaryStringExpansion("1?0?")) // ["1000", "1001", "1100", "1101"]