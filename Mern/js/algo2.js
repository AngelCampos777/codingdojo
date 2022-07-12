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


// console.log(orderedIntersection([1,1,1,2,3,4], [1,1,3,4,5]));