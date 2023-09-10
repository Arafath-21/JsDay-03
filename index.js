// //Normal or  named function
// function foo() {
//     var a = 'hello'
//     return (a);
// }
// let b = foo();
// console.log(b);

// //Normal or named function with Parameters and passing arguments
// function sum(N1,N2) {
//     return N1+N2;
// }
// console.log(sum(10,10));

// // Arrow function
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = numbers.filter((number) => number % 2 === 0);
// evenNumbers.forEach((evenNumber) => {
//   console.log(evenNumber);
// });

// //Normal Function
// let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers1.length; i++) {
//   let number = numbers1[i];
//   if (number % 2 === 0) {
//     console.log(number);
//   }
// }
// //for loop
// for (let i = 0; i < 5; i++) {
//     console.log(i); // Outputs 0, 1, 2, 3, 4
//   }
// // While loop
// let j = 0;
// while (j < 5) {
//   console.log(j); // Outputs 0, 1, 2, 3, 4
//   j++;
// }
// // Do while loop
// let k = 0;
// do {
//   console.log(k); // Outputs 0
//   k++;
// } while (k < 0);
// // For...In Loop:
// // Used for iterating over the properties of an object. It's not recommended for arrays.
// let person = { name: 'Alice', age: 30 };
// for (let key in person) {
//   console.log(key, person[key]); // Outputs 'name Alice' and 'age 30'
// }
// /* For...Of Loop:
//  Introduced in ES6, it's used for iterating over iterable objects like arrays and strings.*/ 
//  let colors = ['red', 'green', 'blue'];
//  for (let color of colors) {
//    console.log(color); // Outputs 'red', 'green', 'blue'
//  }
// /*ForEach Loop:
// A method available on arrays that allows you to iterate through array elements using a callback function.*/
// let numberss = [1, 2, 3, 4];
// numberss.forEach(function (number) {
//   console.log(number); // Outputs 1, 2, 3, 4
// });
// /* Map loop
//  Another array method that creates a new array by applying a function to each element of an existing array.*/
// let nummbers = [1, 2, 3, 4];
// let doubled = nummbers.map(function (number) {
//   return number * 2;
// });
// console.log(doubled); // Outputs [2, 4, 6, 8]

 
// task
numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach(function (number) {
    if (number % 2 === 0) {
        console.log (number);
    }
});