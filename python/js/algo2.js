/*
    Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
    */

// const str1 = "Y(3(p)p(3)r)s";
// const expect1 = true;

// const str2 = "N(0(p)3";
// const expect2 = false;
// Explanation: not every parenthesis is closed.

// const str3 = "N(0)t ) 0(k";
// const expect3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

// const str4 = "a(b))(c";
// const expect4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
// function parensValid(str) {
//     var countOpen = 0;
//     var countClose = 0;

//     for(var char of str){
//         if(char == "("){
//             countOpen++;
//         }else if(char == ")"){
//             countClose++;
//         }
//         if (countClose > countOpen){
//         return false;
//         }
//     }if (countOpen == countClose){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(parensValid(str1))
// console.log(parensValid(str2))
// console.log(parensValid(str3))
// console.log(parensValid(str4))
/*****************************************************************************/

/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

// const str1a = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
// const expected1 = true;

// const str2a = "D(i{a}l[ t]o)n{e";
// const expected2 = false;

// const str3a = "A(1)s[O (n]0{t) 0}k";
// const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */

// function bracesValid(str) {
//     var openArr = [];

//     for (var char of str){
//         if (char == "(" || char == "[" || char == "{"){
//             openArr.push(char);
//         } else if (char == ")"){
//             if (openArr[openArr.length - 1] == "("){
//                 openArr.pop();
//             } else {
//                 return false;
//             }
//         } else if (char == "]"){
//             if (openArr[openArr.length - 1] == "["){
//                 openArr.pop();
//             } else {
//                 return false;
//             }
//         } else if (char == "}"){
//             if (openArr[openArr.length - 1] == "{"){
//                 openArr.pop();
//             } else {
//                 return false;
//             }
//         }else if (char == ")" || char == "]" || char == "}"){
//                 return false;
//         }
//     }
//     if (openArr.length > 0){
//         return false;
//     } else {
//         return true;
//     }
// }
// console.log(bracesValid(str1a))
// console.log(bracesValid(str2a))
// console.log(bracesValid(str3a))

// function bracesValid(str) {
//     var checker = [];
//     for (var i = 0 ; i < str.length ; i ++) {
//         if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
//             checker.push(str[i]);

//         } else if (str[i] == ")" && checker[checker.length-1] == "(") {
//             checker.pop();
//         } else if (str[i] == "]" && checker[checker.length-1] == "[") {
//             checker.pop();
//         } else if (str[i] == "}" && checker[checker.length-1] == "{") {
//             checker.pop();

//         } else if (str[i] == ")" || str[i] == "]" || str[i] =="}") {
//             return false;
//         }
//     }

//     return checker.length > 0 ? false : true;
// }
// console.log(bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"))
// console.log(bracesValid("D(i{a}l[ t]o)n{e"))
// console.log(bracesValid("A(1)s[O (n]0{t) 0}k"))
/* 
String: Rotate String
Create a standalone function that accepts a string and an integer,
and rotates the characters in the string to the right by that given
integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */

function rotateStr(str, amnt) {
    // string into arr\
    const rotateAmnt = amnt % str.length;
    let charsToRotate = "";
    let newStr = "";

    if (!rotateAmnt || rotateAmnt <= 0) {
        return str;
    }
    for (let i = str.length - rotateAmnt; i < str.length; i++) {
        charsToRotate += str[i];
    }
    for (let i = 0; i < str.length - rotateAmnt; i++) {
        newStr += str[i];
    }
    return charsToRotate + newStr;
}
console.log(rotateStr(str, 4))
/*****************************************************************************/
/* 
Create the function isRotation(str1,str2) that
returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expect1 = true;

const strA2 = "ABCD";
const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const expect2 = false;

const strA3 = "ABCD";
const strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const expect3 = false;

/**
 * Determines whether the second string is a rotated version of the first.
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */

function isRotation(s1, s2) {
    if (s1.length !== s2.length || s1 === s2) {
        return false;
    }
    return (s1 + s1).includes(s2);
}
console.log(isRotation(strA1, strB1))

function isAnagram(string_a, string_b) {

    var str1 = string_a.toUpperCase();
    str1 = str1.split('');
    str1.sort()
    
    str1 = str1.join('')

    var str2 = string_b.toUpperCase();
    str2 = str2.split('');
    str2.sort()
    str2 = str2.join('')

    if (str1 === str2) {
        return true
    } else {
        return false
    }
}


export function isAnagram(string_a, string_b) {
    var strCtA = {};
    var newStrA = "";
    var strCtB = {};
    var newStrB = "";

    for (var letter of string_a) {
        if (letter in string_a != " ") {
            if (!strCtA[letter]) {
                strCtA[letter] = 1;
                console.log(strCtA)
            } else {
                strCtA[letter]++;
                console.log(strCtA);
            }
        }
    }
    for (var letter of string_b) {
        if (letter in string_b != " ") {
            if (!strCtB[letter]) {
                strCtB[letter] = 1;
                console.log(strCtB)
            } else {
                strCtB[letter]++;
                console.log(strCtB);
            }
        }
    }
}

