// var a = 25;
// a = a - 13;
// console.log(a/2);

// a = "hello";
// console.log(a + " hello");

// //Lesson 2 - Predict Loops
// for(var i=0; i<10; i++) {
//     console.log(i);
//     i = i + 3; 
// }0,4,8

// console.log("outside of the loop " + i);


// //Lesson 3 - Predict what the code does
// function getTotal(arrayOfNumbers) {

//   var sum = arrayOfNumbers[0];

//   for(var i=0; i<arrayOfNumbers.length; i++) {
//     sum += arrayOfNumbers[i];
//     console.log("the current sum is: " + sum); 
//   }

//   console.log("the total is: " + sum);

// }

// getTotal([1, 3, 5]);
// current 2
// current 5
// current 10
// total 10

// // Always isSunny
// var isSunny = true;
// var temperature = 45; // let's assume degrees Fahrenheit
// var isRaining = false;
// var whatToBring = "I should bring: ";

// if (isSunny) {
//     whatToBring += "sunglasses, ";
// }
// if (temperature < 50) {
//     whatToBring += "a coat, ";
// }
// if (isRaining) {
//     whatToBring += "an umbrella, ";
// }
// whatToBring += "and a smile!";

// console.log(whatToBring); 
// //ishouldbring:sunglassesacoatandasmile!

// //Prepare for downcount
// for (var i = 10; i > 0; i--) {
//     if (i != 2) {
//         console.log(i);
//     } else {
//         console.log("ignition!");
//     }
// }

// console.log("liftoff!");
// //10 9 8 7 6 5 4 3 ignition! 1 liftoff!

// // //Count positives
// // var countPositives = 0;
// var numbers = [3, 4, -2, 7, 16, -8, 0];

// // // your code here!
// // for(i = 0;i < arr.length; i++){
// //     if(i > 0){
// //         countPositives++;
// //     }
// // }

// // console.log("there are " + countPositives + " positive values");

// function countPos(arr){
//     countPos = 0;
//     for(i = 0;i < arr.length; i++){
//         if(arr[i] > 0){
//             countPos++;
//         }
//     }return ("there are " + countPos + " positive numbers.")
// }
// console.log(countPos(numbers));

// var x = 5;

// function setX(newValue) {
//     x = newValue; 
// }
    
// console.log(x); 5
// setX(15);
// console.log(x); 15
// //The Return of return

// // var x = 5;
    
// function addToX(amount) {
//     return x + amount;
//     console.log("hello there");
// }
    
// console.log(x); 5
// var result = addToX(-10); -5
// console.log(result); -5
// console.log(x); 5

// //palindrome?

// function isPal(arr) {
//     for(var left=0; left<arr.length/2; left++) {
//         var right = arr.length-1-left;
//         if(arr[left] != arr[right]) {
//             return "Not a pal-indrome!";
//         }
//     }
//     return "Pal-indrome!";
// }
    
// var result1 = isPal( [1, 1, 2, 2, 1] ); 
// console.log(result1); not
    
// var result2 = isPal( [3, 2, 1, 1, 2, 3] );
// console.log(result2); is 

//
// function isPal(string){
//     var newString = ""
//     for(i = string.length - 1; i >= 0; i--){
//         newString+=string[i];
//         console.log(newString);
//     }
//     if(newString == string){
//         return "palindrome!";
//     }return "not quite...";
// }
// x = "racecar";
// y = "llama"
// console.log(isPal(x));
// console.log(isPal(y));
//

// var fruit1 = "apples";
// var fruit2 = "oranges";
    
// var temp = fruit1; // temp is a common name for this
// fruit1 = fruit2;
// fruit2 = temp;
    
// console.log(fruit2 + " and " + fruit1);
//"oranges" and "apples"

// var start = 0;
// var end = 12;
    
// while(start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }



// Reversing an array
// Write a function reverse( arr ) to reverse an array, if we were given...

// arr1 = ["a", "b", "c", "d", "e"];
// we expect to get back...

// arr2 = ["e", "d", "c", "b", "a"];


// function revArray(arr){
//     newArr = [];
//     for(i = arr.length - 1; i >= 0; i--){
//         newArr.push(arr[i]);
//     }return newArr;
// }

// console.log(revArray(arr1));
// console.log(revArray(arr2));

// function revArr(arr){
//     temp = [];
//     for(i = 0; i < arr.length; i++){
//         temp[i] = arr[arr.length-1-i];
//     }return (temp)
// }

// console.log(revArr(arr1));
// console.log(revArr(arr2));

// function reverse(arr){
//     for(x = 0; x < arr.length/2; x++){
//         var y =arr.length - 1 - x;
//         var temp = arr[x];
//         arr[x] = arr[y];
//         arr[y] = temp;
//     }
// }
// function Something(arr){
//     var result = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > 10){
//             console.log("We got a big one!");
//         } else {
//             result+=arr[i]
//         }
//     }
//     if(result < 10){
//         console.log("You're killin' me, Smalls");
//     } else {
//         return "You're gonna need a bigger funcion!";
//     }
// }
// Something([1,8,21,-11,12,2,9,15,7]);

// Math.ceil(9.51)
// Math.ceil(9.1)

// Math.floor(8.45)
// Math.floor(8.99)

// //Generating a random number
// for(var i =0;i<10;i++){

//     var random = Math.floor(Math.random() * 10 + 1) ;
//     console.log(random)

// }

// Dice Roller
// Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.

// function d6() {
//     var roll = Math.random();
//     roll = Math.floor(Math.random() * 6 + 1) ;
//     return roll;
// }
    
// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);


// Consult the Oracle
// Using the following array, write a function that will answer all of our questions by randomly choosing a response

// var lifesAnswers = [
//     "It is certain.",
//     "It is decidedly so.",
//     "Without a doubt.",
//     "Yes – definitely.",
//     "You may rely on it.",
//     "As I see it, yes.",
//     "Most likely.",
//     "Outlook good.",
//     "Yes.",
//     "Signs point to yes.",
//     "Reply hazy, try again.",
//     "Ask again later.",
//     "Better not tell you now.",
//     "Cannot predict now.",
//     "Concentrate and ask again.",
//     "Don't count on it.",
//     "My reply is no.",
//     "My sources say no.",
//     "Outlook not so good.",
//     "Very doubtful."
// ];

// function d20(){
//         var random = Math.floor(Math.random() * 20);
//         return random;
// } 

// console.log(lifesAnswers[d20()]);

// var monster = {
//     id: 1,
//     name: "Bulbasaur",
//     types: ["poison", "grass"]
// };

// console.log(monster.name)
// console.log(monster.types[1])

var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];



// Challenges - using the array of pokémon above and loops:

// console.log the pokémon objects whose id is evenly divisible by 3
// function pokeDiv3(pokémon){
    // for(var i =0; i<pokémon.length; i++){
//         if(pokémon[i].id % 3 == 0){
//             console.log(pokémon[i])
//         }
//     }
// }
// pokeDiv3(pokémon);
// console.log the pokémon objects that have more than one type
// function pokeMulti(pokémon){
//     for(var i =0; i<pokémon.length; i++){
//         if(pokémon[i].types.length > 1){
//             console.log(pokémon[i])
//         }
//     }
// }
// pokeMulti(pokémon)
// console.log the names of the pokémon whose only type is "poison"
// function pokePoi(pokémon){
//     for(var i =0; i<pokémon.length; i++){
//         if(pokémon[i].types.length == 1 && pokémon[i].types == 'poison'){
//             console.log(pokémon[i].name)
//         }
//     }
// }
// pokePoi(pokémon)

// console.log the first type of all the pokémon whose second type is "flying"
// function pokeScndFly(pokémon){
//     for(var i =0; i<pokémon.length; i++){
//         if(pokémon[i].types.length == 2 && pokémon[i].types[1] == 'flying'){
//             console.log(pokémon[i])
//         }
//     }
// }
// pokeScndFly(pokémon)

// Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
// #1 works
// function pokeIop(pokémon){

//     for(var i = 0; i < pokémon.length; i++){
//         if(pokémon[i].types.length == 1 && pokémon[i].types == 'poison'){
//             var newString = ""
//             for(j = pokémon[i].name.length - 1; j >= 0; j--){
//                 newString+=pokémon[i].name[j];
//             }
//             console.log(newString)
//         }
//     }
// }
// pokeIop(pokémon);


//  #2 works
// listA = ['bobby', 'joe', 'tim']

// function pokePoi(pokémon){
//     list = [];
//     for(var i =0; i<pokémon.length; i++){
//         if(pokémon[i].types.length == 1 && pokémon[i].types == 'poison'){
//             list.push(pokémon[i].name);
//         }
//     } return list
// }
// pokePoi(pokémon);
// function isPal(arr){
//     newList = [];
//     for(var j = 0; j < arr.length; j++){
//         var newString = ""
//         for(var i = arr[j].length - 1; i >= 0; i--){
//             var thisString = arr[j]
//             newString+=thisString[i];
//         }newList.push(newString);
//     } return newList
// }

// console.log(isPal(pokePoi(pokémon)));

    // function isPal(arr){
    //     newList = [];
    //     for(var j = 0; j < arr.length; j++){
    //         var newString = arr[j].reverse();
    //         newList.push(newString);
    //     } return newList
    // }
    
    // console.log(isPal(pokePoi(pokémon)));
// Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
// not mine, works.
// function pokepoisonRev(pokemon){
//     for (var i = 0; i < pokemon.length; i++){
//         if(pokemon[i].types.length == 1 && pokemon[i].types == "poison"){
//             var reverseName = "";
//             for (var x = pokemon[i].name.length - 1; x >= 0 ; x--){
//                 reverseName += pokemon[i].name[x];
//             }
//             console.log(reverseName);
//         }
//     }
// }

// pokepoisonRev(pokémon);

