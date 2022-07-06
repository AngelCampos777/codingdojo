//Bubble Sort
//Given an array of numbers, sort the numbers by swapping adjacent values that are in the wrong order
//Ex: [5,9,2,7,6] -> [5,2,7,6,9] -> [2,5,7,6,9] -> [2,5,6,7,9]
function Bubble(arr){
    for(var z = 0; z < arr.length; z++){
        for(var i = 0; i < arr.length-1; i++){
            var temp;
            if(arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }return arr;
}

//Selection Sort
//Given an array of numbers, sort the numbers by finding the smallest number in the array and moving it to the beginning. Then iterate through everything except the first number, which is now sorted, and find the next smallest value and move it to index 1. Keep doing this until all values are sorted. 
//Ex: [7,5,2,8,4] -> [2,5,7,8,4] -> [2,4,7,8,5] -> [2,4,5,7,8]

function Select(arr){
    for(var z = 0; z < arr.length; z++){
        var temp;
        var small = arr[z];
        for(var i = z+1; i < arr.length; i++){
            if(arr[i] < small){
                small = arr[i];
            }
            temp = arr[z];
            arr[z] = small;
            small = temp;
        }
    } return arr;
}

//Insertion Sort
//Given an array of numbers, sort the numbers by placing values into their correct position at the front (sorted part) of the array
//Ex: [9,5,2,7,1] -> [5,9,2,7,1] -> [2,5,9,7,1] -> [2,5,7,9,1] -> [1,2,5,7,9]

function Insertion(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j > 0; j--){
            if(arr[j] < arr[j - 1]){
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                console.log(arr);
            }
        }
    }
    return arr;
}

arr1 = [5,9,2,7,6,1,1,3]
// console.log(Bubble(arr1));
// console.log(Select(arr1));
console.log(Insertion(arr1));