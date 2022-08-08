// You are building the functionality to "add all wish list items to cart" in a single click.
// Given two arrays of product objects: a shopping cart and a wish list, return a new array with all of the shopping cart items AND all of the wish list items that were not already in the shopping cart (no dupes).

class Product {
    constructor(id, name, price, href) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.href = href;
    }
  }
  const hoodie = new Product("B075JV7RWV", "Amazon Essentials Zip Sweatshirt", 20.4, "https://www.amazon.com/dp/B075JV7RWV?ref=ppx_yo2ov_dt_b_product_details&th=1&psc=1");

  const algaeOmega = new Product("B081QQ7PRP", "Nordic Naturals Algae Omega", 36.99, "https://www.amazon.com/gp/product/B081QQ7PRP/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1");
  
  const broccoMax = new Product("B01D15LMCK", "Jarrow Formulas BroccoMax", 29.63, "https://www.amazon.com/gp/product/B01D15LMCK/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1");
  
  const tearsOfChios = new Product("B07Q454QLH", "Chios Mastiha Gum", "https://www.amazon.com/gp/product/B07Q454QLH/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&psc=1");
  
  const wideYogaMat = new Product("B086BZL6JT", "CAMBIVO Extra Wide Yoga Mat", 39.99, "https://www.amazon.com/gp/product/B086BZL6JT/ref=ppx_yo_dt_b_asin_title_o06_s01?ie=UTF8&psc=1");
  
  const travelBackpack = new Product("B07RM5D4XV", "Hynes Eagle 45L Travel Backpack", 64.99, "https://www.amazon.com/gp/product/B07RM5D4XV/ref=ppx_yo_dt_b_asin_title_o01_s01?ie=UTF8&psc=1");
   
  const officeChair = new Product("B08L8LCRS3", "Ticova Ergonomic Office Chair", 219.88, "https://www.amazon.com/gp/product/B08L8LCRS3/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1");
  
  const chairArmrestPads = new Product("B01M8F9IYC", "Aloudy Ergonomic Memory Foam Office Chair Armrest Pads", 17.99, "https://www.amazon.com/gp/product/B01M8F9IYC/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1");
  
  const backMassager = new Product("B07Q5WHSBD", "Papillon Back Massager with Heat", 39.99, "https://www.amazon.com/gp/product/B07Q5WHSBD/ref=ppx_yo_dt_b_asin_title_o06_s01?ie=UTF8&psc=1");
  
  const assamBlackTea = new Product("B00T0TZHTG", "Tealyra - Assam Black Beauty", 24.69, "https://www.amazon.com/Tealyra-Taiwanese-Caffeine-Naturally-Processed/dp/B00T0TZHTG/ref=sr_1_95?keywords=Tealyra&qid=1655415356&sr=8-95");
  
  const slimFoldWallet = new Product("B01HH32JV0", "SlimFold Micro - Thin & Slim Bifold Wallet", 57, "https://www.amazon.com/gp/product/B01HH32JV0/ref=ppx_yo_dt_b_asin_title_o04_s01?ie=UTF8&th=1");
   
  // const shoppingCart1 = [];
  // const wishList1 = [
  //   hoodie,
  //   tearsOfChios,
  //   wideYogaMat,
  //   travelBackpack,
  //   slimFoldWallet,
  // ];
  // const expected1 = [
  //   hoodie,
  //   tearsOfChios,
  //   wideYogaMat,
  //   travelBackpack,
  //   slimFoldWallet,
  // ];
  
  // const shoppingCart2 = [tearsOfChios, assamBlackTea, hoodie];
  // const wishList2 = [tearsOfChios, chairArmrestPads, officeChair, assamBlackTea];
  // const expected2 = [
  //   tearsOfChios,
  //   assamBlackTea,
  //   hoodie,
  //   chairArmrestPads,
  //   officeChair,
  // ];
  
  // const shoppingCart3 = [algaeOmega, wideYogaMat, backMassager];
  // const wishList3 = [backMassager, wideYogaMat, algaeOmega];
  // const expected3 = [algaeOmega, wideYogaMat, backMassager];
  
  // const shoppingCart4 = [hoodie];
  // const wishList4 = [];
  // const expected4 = [hoodie];

  function wishList(shop, wish){
    let i=0; 
    let answer = shop;
    while(i<wish.length){
        if (!answer.includes(wish[i])){
            answer.push(wish[i]);
        }
        i++
    }
    return answer;
} 
function fullCart(cart, wish) {
    let cart2 = [...cart]
    for(let i in wish) {
        if(cart2.includes(wish[i])){
            continue
        }
        cart2.push(wish[i])
    }
    return cart2
}


// Can string become a palindrome
// Given a string, return true or false whether the letters provided could become a palindrome (they do not already have to be one, they just need the potential to become one)
// Think carefully here about what the rules are for something being a palindrome and see if you can use those rules to create an efficient method!

// const str1 = "";
// const expected1 = false;

// const str2 = "a";
// const expected2 = true;

// const str3 = "ddaa";
// const expected3 = true;
// // Explanation: "daad" or "adda"

// const str4 = "dda";
// const expected4 = true;
// // Explanation: "dad"

// const str5 = "aaadd";
// const expected5 = true;
// // Explanation: "daaad"

// const str6 = "abc";
// const expected6 = false;

//if odd & the characters were divis by 2 if(x % 2 = 0)
//if even theres an equal number of characters


function AnyPalindrome (str){
  if (str.length == 0) return false;
  if (str.length == 1) return true;
  let ob = {};
  // even number length (no middle letter) need to have even number of each letter found
  if (str.length % 2 == 0){
      for (let i=0; i< str.length; i++){
          !ob[str[i]] ? ob[str[i]] = 1 : ob[str[i]] += 1;
      }
      let arr = Object.values(ob);
      for(let j=0; j< arr.length; j++){
          if (arr[j] % 2 != 0){
              return false;
          } 
      }
      return true;
  }
  else{
      for (let i=0; i< str.length; i++){
          !ob[str[i]] ? ob[str[i]] = 1 : ob[str[i]] += 1;
      }
      let arr = Object.values(ob);
      let counter = 0; 
      for(let j=0; j< arr.length; j++){
          if (arr[j] % 2 != 0){
              counter ++;
          }
      }
      if(counter > 1){
          return false
      }
      return true;
  }
} 
// Given a string, find the length of the longest substring of non-repeating characters
// A substring is an unbroken sequence of letters within a larger string

// const str1 = "abcabcbb";
// const expected1 = 3;
// // Explanation: The answer is "abc", with the length of 3.

// const str2 = "bbbbb";
// const expected2 = 1;
// // Explanation: The answer is "b", with the length of 1.

// const str3 = "pwwkew";
// const expected3 = 3;
// // Explanation: The answer is "wke", with the length of 3

// const str4 = "dvadf";
// const expected4 = 4;
// // Explanation: "vadf"

function subStr(str) {
    let result = '';
    for(let j in str){
        let map = {};
        let temp = '';
        for(let i = j; i < str.length; i++){
            if(str[i] in map){
                break
            } else {
                map[str[i]] = 1;
                temp += str[i];
            }
            if(temp.length > result.length){
                result = temp;
            }
        }
    }
    return result.length;
}
var lengthOfLongestSubstring = function(s) {
    let dict = {};
    let long = 0;
    let longest = 0;
    let z =0;
    let i=0;
    while( i < s.length){
        if(!dict[s[i]]){
            dict[s[i]] = s[i];
            console.log(s[i])
            long++;
            i++
            if(long > longest){
                longest = long;
            }
        }
        else{
            long = 0;
            z++
            i = z;
            dict = {};
        }
    }
    return longest;
}; 
// Given two strings, return true if the first string can be built from the letters in the 2nd string

const strA1 = "hello world";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

function includeString(str1, str2){
    if(str1.length == 0 || str2.length == 0){
        return false;
    }
    if(str2.length < str1.length){
        return false;
    }
    let map1 = {};
    let map2 = {};
    for (let i=0; i< str1.length; i++){
        !map1[str1[i]] ? map1[str1[i]] = 1 : map1[str1[i]] += 1;
    }
    for (let j=0; j< str2.length; j++){
        !map2[str2[j]] ? map2[str2[j]] = 1 : map2[str2[j]] += 1;
    }
    for (var char in map1){
        if (!map2[char]){
            return false;
        } else if (map2[char] < map1[char]){
            return false;
        }
    }

    return true;
} 
console.log(includeString(strA1,strB1));