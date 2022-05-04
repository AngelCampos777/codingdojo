var theDojo = [[1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
[3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
[5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
[2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
[6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
[0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
[0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
[2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
[5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
[9, 2, 2, 2, 0, 7, 0, 1, 1, 0]];
var dojoDiv = document.querySelector("#the-dojo");

// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;
}

// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
            tL = theDojo[i-1][j-1];
            tC = theDojo[i-1][j-1];
            tR = theDojo[i-1][j+1];
            mL = theDojo[i][j-1];
            mC = theDojo[i][j];
            mR = theDojo[i][j+1];
            bL = theDojo[i+1][j-1];
            bC = theDojo[i+1][j];
            bR = theDojo[i+1][j+1];
            sum = tL + tC + tR + mL + mR + bL + bC + bR;
            if(i < 0)
            if(i > 9)
            if(j < 0)
            if(j > 9) 
            console.log(sum);
    // console.log({ i, j });
    // alert("TODO - determine how many ninjas are hiding in adjacent squares");
    
}
    console.log({i,j});
    console.log(theDojo[i][j]);
    sum = 0
    for(x = i-1; x >= i+1; x++){
        for(y = j-1; y >= j+1; y++){
        if ((i+x) >= 0 && (j+y) >= 0 && (i+x) <= 10 && (j+y) <= 10)
            sum += theDojo[i+x][j+y];
    }
}
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;


// // break not mine
// // start the game
// // message to greet a user of the game
// var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
// console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
// console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// // shows the dojo for debugging purposes
// console.table(theDojo);
// // adds the rows of buttons into <div id="the-dojo"></div> 
// dojoDiv.innerHTML = render(theDojo);

//  // var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
// //                 [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
// //                 [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
// //                 [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
// //                 [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
// //                 [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
// //                 [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
// //                 [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
// //                 [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
// //                 [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
// var theDojo = [];

// var dojoDiv = document.querySelector("#the-dojo");

// // Creates the rows of buttons for this game
// function render(theDojo) {
//     // 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
//     // Sets the Dojo to a matrix of 0s
//     for (var row = 0; row < 10; row++){
//         var subDojo = [];
//         for (var col = 0; col < 10; col++){
//             subDojo.push(0);
//         }
//         theDojo.push(subDojo)
//     }
//     // Randomly places a ninja 10 times
//     for (var ninjas = 0; ninjas < 10; ninjas++){
//         var randRow = Math.floor(Math.random() * 10);
//         var randCol = Math.floor(Math.random() * 10);
//         // This if/else checks for a ninja at a random spot and if there is none, places one
//         if (theDojo[randRow][randCol] != 1){
//             theDojo[randRow][randCol] = 1;
//         }else if(theDojo[randRow][randCol] == 1){
//             // Makes the ninja count go down in case we get a spot that already has a ninja so we get a full 10
//             ninjas--;
//         }
//     }
//     // Comment lines 18-37 out and uncomment lines 1-10 to return original functionality

//     var result = "";
//     for(var i=0; i<theDojo.length; i++) {
//         for(var j=0; j<theDojo[i].length; j++) {
//             result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
//         }
//     }
//     return result;
// }
// // TODO - Make this function tell us how many ninjas are hiding 
// //        under the adjacent (all sides and corners) squares.
// //        Use i and j as the indexes to check theDojo.
// function howMany(i, j, element) {
//     //console.log({i, j});
//     //console.log(theDojo[i][j]);
//     var sum = 0;
//     for (var x = -1 ; x <= 1; x++){
//         for (var y = -1; y <= 1; y++){
//             if ((i+x) >= 0 && (j+y) >= 0  && (i+x) < 10 && (j+y) < 10){
//                 sum += theDojo[i+x][j+y];
//             }
//         }
//     }
//     if (theDojo[i][j] == 1){
//         // 3. if you click on a ninja you must restart the game 
//         dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
//     }
//     sum -= theDojo[i][j];
//     // console.log(sum);
//     // 1. draw the number onto the button instead of alerting it
//     element.innerText = sum;
//     // alert("There are " + sum + " ninjas hiding around you")
// }
    
// // BONUS CHALLENGES
// // Moved comments to relevant code positions for clarity
    
// // start the game
// // message to greet a user of the game
// var style="color:cyan;font-size:1.5rem;font-weight:bold;";
// console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
// console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// // shows the dojo for debugging purposes
// console.table(theDojo);
// // adds the rows of buttons into <div id="the-dojo"></div> 
// dojoDiv.innerHTML = render(theDojo);