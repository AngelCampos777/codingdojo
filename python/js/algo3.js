/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else
  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5];
const expected1 = 6;

const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 5];
const expected3 = 5;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */

function firstNonRepeated(nums) {
    if (nums.length < 1) {
        return null;
    }
    var expected = {};
    for (var num of nums) {
        if (!expected[num]) {
            expected[num] = 1;
        } else {
            expected[num]++;
        }
    }
    console.log(expected)
    for (var num of nums) {
        if (expected[num] == 1) {
            return num;
        }
    }
}
console.log(firstNonRepeated(nums1))
console.log(firstNonRepeated(nums2))
console.log(firstNonRepeated(nums3))
console.log(firstNonRepeated(nums4))
console.log(firstNonRepeated(nums5))

function bookIndex(pages) {
    var strArr = [];
    var str = "";
    var seqStart;

    for (var i = 0; i < pages.length; i++) {
        seqStart = pages[i]
        var seqEnd = undefined;

        for (var j = i + 1; j < pages.length; j++) {
            if (pages[j] == pages[j - 1] + 1) {
                seqEnd = pages[j];
                if (j == pages.length - 1) {
                    i = j;
                    break;
                }
            } else if (seqEnd == undefined) {
                i = j - 1;
                break;
            } else {
                i = j - 1;
                break;
            }
        }
        if (seqEnd != undefined) {
            strArr.push('' + seqStart + '-' + seqEnd)
        } else {
            strArr.push('' + seqStart)
        }
    }
    for (var k = 0; k < strArr.length; k++) {
        if (k == strArr.length - 1) {
            str += strArr[k]
        } else {
            str += strArr[k] + ", ";
        }
    }

    return str;

}

function recursiveSigma(input) {
    if (input <= 0) {
        return 0;
    } else {
        return input + recursiveFactorial(input - 1);
    }
}

function recursiveFactorial(input) {
    if (input <= 1) {
        return 1;
    } else {
        return input * recursiveFactorial(input - 1);
    }
}
