//Ordered Intersection
//Given two arrays of sorted numbers, return a new array that contains only the numbers that are in both arrays - do NOT count duplicates
//Ex: given [1,2,2,3,4,5] and [2,4,6,7,8] return [2,4]
//Ex: given [1,1,1,2,3,4] and [1,1,3,4,5] return [1,3,4]
function orderedIntersection(arr1, arr2){
    let temp = [];
    for (let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr2[j] > arr1[i]){
                break;
            }
            if(arr1[i] === arr2[j]){
                if(!temp.includes(arr1[i])){
                    temp.push(arr1[i])
                }
            }
        }
    }
    return temp;
}

//Union Sorted Arrays
//Efficiently combine two already-sorted multiset arrays into a new sorted array containing the multiset union.
//Unions by default will take the set of duplicates that has the highest occurrences from one array. (ex, if one array has three 2's and another has two 2's then the result will have three 2's)
//Examples:
//const nums1B = [2, 2, 6, 6, 7]; {     2:2, 6:2, 7:1}
//const nums1A = [1, 2, 2, 2, 7]; {1:1, 2:3,      7:1}
//const expected1 = [1, 2, 2, 2, 6, 6, 7];

//const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
//const nums2B = [2, 6, 6, 7];
//const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

function union(arr1, arr2){
    //start with the arr that has the lowest value
    //iterate through both until the number changes for each 
    //keep track of the amount of times we see each num
    //push the min # of pairs, but max # of repetitions
    //continue to next number
        let i = 0;
        let j = 0;
        let result = [];
        while(i < arr1.length && j < arr2.length) {
            if(arr1[i] == arr2[j] && result[result.length - 1] != arr1[i]) {
                result.push(arr1[i]);
                i++;
                j++;
            } else if (arr1[i] < arr2[j]) {
                i++;
                console.log("iterating i")
            } else {
                j++;
                console.log("iterating j")
            }
        }
        return result;
}

//Diagonal Difference
//Given a squared matrix (2D array) of integers, calculate the absolute difference between the sum of the diagonals (top left to bottom right and top right to bottom left)
const squareMatrix1 = [
 [1, 2, 3],
 [4, 5, 6],
 [9, 8, 9],
];
//const expected1 = 2;
//left to right diagonal: 1 + 5 + 9 = 15
//right to left diagonal: 3 + 5 + 9 = 17
//absolute difference = 2
const squareMatrix2 = [
 [1, 2, 3, 4, 5],
 [1, 2, 3, 4, 5],
 [1, 2, 3, 4, 5],
 [1, 2, 3, 4, 5],
 [1, 2, 3, 4, 5],
];
//const expected2 = 0; 
//left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
//right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
//absolute difference = 0
function Diag(arr){
    let RDiag = 0;
    let LDiag = 0;
    for(let i=0; i<arr.length; i++){
        RDiag += arr[i][i];
        LDiag += arr[i][arr.length-1-i];
    }
    return Math.abs(RDiag-LDiag);
}

// Symmetric Difference
// Given two arrays of integers, return an array of all the numbers the arrays do NOT have in common
// The arrays may or may not be in order
// If there are duplicates of values that are in one array and not the other, only include the value once
// Ex: given [1,2] and [2,1,3] return [3]
// Ex: given [1,1] and [1] return []
// Ex: given [1,2,3] and [4,5,6] return [1,2,3,4,5,6]
// Ex: given [4,1,2,3,4] and [1,2,3,5,5] return [4,5]

function symmetricDiff(arr1, arr2) {
    let symmDiff = [];

    let map1 = {};
    let map2 = {};

    for (let i = 0; i < arr1.length; i++) {
        if (map1[arr1[i]] >= 1){
            map1[arr1[i]] += 1;
        } else {
            map1[arr1[i]] = 1;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (map2[arr2[i]] >= 1){
            map2[arr2[i]] += 1;
        } else {
            map2[arr2[i]] = 1;
        }
    }

    for (var j in map1) {
        if (!map2[j]){
            symmDiff.push(parseInt(j));
        } else {
            continue;
        }
    }

    for (var k in map2) {
        if (!map1[k]){
            symmDiff.push(parseInt(k));
        }
        else {
            continue;
        }
    }

    return symmDiff;
}
// Given an array of integers, find all non-consecutive integers. Non-consecutive integers are ones in which the number directly following is not exactly 1 larger than the former number. For example, [3,4] are consecutive because 4 is 1 greater than 3, but [3,2] is non-consecutive because 2 is NOT 1 larger than 3
// Return an array of objects where each object contains the number that was non-consecutive and its index
// ex: given [1,2,3,4,6,7,8,10]
// Return: [
// { idx: 4, num: 6},
// { idx: 7, num: 10}
// ]

// Challenge
// Given a list of integers and a sum, find all the consecutive numbers that add up to that sum and return an array of the results
// Note: consecutive in the prior algorithm meant that the number following was +1 larger than the prior number. Consecutive here is just meant to mean one value after another with no relation to how large or small those numbers are
// ex: given [2,5,3,6,7,23,12] and a sum of 16
// Return [ [2,5,3,6], [3,6,7] ] Notice how if you add the values up they equal 16
// If no results are found, return an empty array

function consec2(arr, sum) {
    let bigtemp = [];
    let smtemp = [];
    let total  = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            total += arr[j];
            if(total > sum){
                smtemp = []
                total = 0
                break;
            }
            if(total < sum){
                smtemp.push(arr[j])
            }
            if(total == sum){
                smtemp.push(arr[j]);
                bigtemp.push(smtemp);
                smtemp = []
                total = 0
            }
        }
    }
    return bigtemp;
}

console.log(Diag(squareMatrix1));
console.log(Diag(squareMatrix2));
// console.log(orderedIntersection([1,1,1,2,3,4], [1,1,3,4,5]));