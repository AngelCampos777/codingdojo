// console.log('help')

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
// var arr2d = [ [2, 5, 8],
//               [3, 6, 1],
//               [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
//console.log(arr2d[0][3]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array


//loops over the outer array
// for(var i =0; i<arr2d.length; i++){
//     var inner = arr2d[i]
//     //loop over the inner array
//     for(var y = 0; inner.length; y++){
//         console.log(arr2d[i][y])
        
//     }

// }


// Flatten Array
// Given a 2 dimensional array (an array containing 
//arrays), return a new array containing just the 
//values from inside the sub-arrays. Don't assume 
//the array will always be the same size, or that 
//the sub-arrays are all the same length (the array 
//might be jagged). Don't use built-in methods like 
//Array.prototype.flat() but feel free to use 
//.push(value) and/or .pop() where needed.

// complete the following function
// function flatten(arr) {
//     var flat = [];
//     for(var i =0; i<arr.length; i++){
//         var inner = arr[i];
//         for(var y = 0; inner.length; y++){
//             var temp = (arr[i][y]);
//             flat.push(temp);
//         }
    
//     }
//     return flat;
// }
    
// var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
// console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

// function fibonacciArray(n) {
//     // the [0, 1] are the starting values of the array to calculate the rest from
//     var fibArr = [0, 1];
//     // your code here
//     return fibArr;
// }
// var result = fibonacciArray(10);
// console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
