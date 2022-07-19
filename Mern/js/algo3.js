// Printing keys and values
// Given an object, return an array of arrays containing the key and value of each entry
// Ex: given object
const obj1 = {
     name: "Pizza",
     calories: 9001
}
// return
// const result = [
//    ["name": "Pizza"],
//      ["calories", 9001]
// ]

function PrintKeyVals(obj){
    const result = [];
    for (const [key, val] of Object.entries(obj)){
        result.push([key, val]);
    }
    return result;
}
function PrintVals(obj){
    const result = [];
    for (const [keys, val] of Object.entries(obj)){
        result.push(val);
    }
    return result;
}
function PrintKeys(obj){
    const result = [];
    for (const [key] of Object.entries(obj)){
        result.push(key);
    }
    return result;
}
// console.log(PrintKeyVals(obj1))
console.log(PrintKeys(obj1))
console.log(PrintVals(obj1))

// Once you have that worked out, you can work on the next algorithm
// Insert SQL Statement
// Given a table name string and an object whose key value pairs represent column names and values for the columns return a SQL insert statement string
// Ex: 
const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
// const expected1 = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

function Insert(table, object){
    const Ins = `INSERT INTO ${table} (${PrintKeys(object)}) VALUES (${PrintVals(object)});`;
    return Ins;
}
console.log(Insert(table, insertData1));

// Find Objects
// Given a search criteria object whose values will only be primitives (ints, strings, booleans) and a list of objects return any object that matches all the key value pairs in the search critera object

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};
const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
    lastName: "Smith",
};
const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

// Given an array of objects, a searchFor string, and searchBy key that exists in the object return a new array of only those objects whose value for the given key starts with the given search string.
// You can assume the key will exist on the object and the value of that key will be a string.

// Bonus: make the search case insensitive.

// This kind of algorithm can be used in react onChange as you type into a search bar to live-filter a list.

function findObjects(items, search) {
    let answer = [];

    for (let i = 0; i < items.length; i++){
        let valid = true;
        for (let j in items[i]){
            for (let k in search){
                if (j == k && items[i][j] != search[k]){
                    valid = false;
                    break;
                }
            }
            if (!valid){
                break;
            }
        }
        if (valid){
            answer.push(items[i]);
        }
    }

    return answer;
}

function searchObjects(people, searchFor, searchBy){
    let answer = [];
    for (let i = 0; i < people.length; i++){
        for (let k in people[i]){
            if (k != searchBy) {
                continue;
            } else if (people[i][k].slice(0, searchFor.length).toLowerCase() == searchFor.toLowerCase()){
                answer.push(people[i]);
                break;
            }
        }
    }

    return answer;
}

const people = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "Eddy",
    lastName: "Lee",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
  {
    firstName: "Edward",
    lastName: "Kim",
  },
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
];