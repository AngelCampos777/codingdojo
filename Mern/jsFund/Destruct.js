// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)//tesla
// console.log(otherRandomCar)//mercedes

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
//Predict the output
// console.log(name);//name already used
// console.log(otherName);//other name references name which is elon

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);//12345
// console.log(hashedPassword);//person doesnt have a key named hashedpass

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);//F 2 !=5
// console.log(first == third);//T 2 == 2

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);//undefined needs a new name to reference as parameter, it does have a key named key so it returns that key's value: 'value'
console.log(secondKey);//needs another name, it does have the key second key so iot returns thew info stored, an array
console.log(secondKey[0]);// 1
console.log(willThisWork);//[null, 5] so it doesnt return an array with one thing in it it returns the value in the array at the position of the new variable