// EVENS AND ODDS!
 
// Create a function that accepts an array of numbers. Every time that array
// has 3 odd values in a row, print "That's odd!" Every time the array has 3 even values
// in a row, print "Even more so!"
 
// Only print the messages when it's 3 in a row. If there are 5 consecutive odd
// values, for example, it should only print the message one time. If there are 7 consecutive
// even values, it should print the message two times.
 
// EXAMPLES:
// ------------------------------------
// [1,3,5,8,8,8]
// OUTPUT:
// That's Odd
// Even more so!

// ------------------------------------
// [1,2,3,4,5,6,7,8]
// OUTPUT:
 
// ------------------------------------
// [2,2,1,1,6,6,5,5,5]
// OUTPUT:
// That's odd!
 
// ------------------------------------
// [1,1,1,3,3]
// OUTPUT:
// That's odd!

/*
thats odd = 3 odds
even more so = 3 evens
only print in multiples of 3
function
temp var counter for consecutive numbers of the same type
*/
/*
var arr1 = [2,2,1,1,1,6,6,5,5,5];
for(i = 0; i < arr1.length; i++);{
    if(arr1[i] % 2 == 1 && arr1[i+1] % 2 == 1 && arr1[i+2] % 2 == 1){
        console.log("Thats Odd.");
    }
    else if(arr1[i] % 2 == 0 && arr1[i+1] % 2 == 0 && arr1[i+2] % 2 == 0);{
        console.log("Even more so.");
}
}
*/

const arr1=[2,2,1,1,1,6,6,5,5,5]
const arr2=[1,1,1,3,3]
const arr3=[1,2,3,4,5,6,7,8]
const arr=[1,3,5,8,8,8]


function numBejewled(numArr){
    var evenCount = 0
    var oddCount = 0
    for(i = 0; i < arr.length; i++);{
        if(arr[i] % 2 == 0){
            evenCount++;
            oddCount = 0;
        }else{
            oddCount++;
            evenCount = 0;
        }
    }
        if(evenCount == 3){
            console.log("even more so.");
            evenCount = 0
        }else if(oddCount == 3){
            console.log("thats odd.")
            oddCount = 0;
        }
}


numBejeweled(arr1);
numBejeweled(arr2);
numBejeweled(arr3);
numBejeweled(arr);



// Always Hungry
// Create a function that accepts and array, and prints "yummy" each time one of the values is equal to "food". If no array values are "food", then print "I'm hungry" once.

// Ex: Given array [1, 4, "food", "hello", true, "food"]
// Output:
// yummy
// yummy

// ------------------------------------
// Ex: Given array [2, true, 5, "hello", 8, "four"]
// Output:
// I'm hungry


var arr4 = [1, 4, "food", "hello", true, "four"];

for(i = 0;i < arr4.length; i++){
    if(arr4[i] == "food"){
        console.log("yummy");
    }
}
for(i = 0;i < arr4.length; i++){
    if(arr4[i] != "food"){
        break;
    }else(console.log("im hungry"));{
}
}