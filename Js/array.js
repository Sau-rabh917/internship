// // ARRAY METHOD 
// // CREATION OF ARRAY 
const arr = [1,2,3,4,5,6]
console.log(arr);

// const arr1 = new Array(1,2,3,4,5,6,7)
// console.log(arr1);


// let fruits = ["Apple", "Banana", "Mango",10];
// fruits.shift();
// fruits.unshift("gg");
// fruits.pop();
// fruits.push("hh");
// console.log(fruits);

// console.log(arr1.length);

// let ispresent = arr1.includes(4);
// console.log(ispresent);

// console.log(arr1.lastIndexOf(4));

// const user = [
//     {
//         name: "Saurabh",
//         age: 21,
//         country: "India"
//     },
//     {
//         name: "John",
//         age: 25,
//         country: "USA"
//     },
//     {
//         name: "Jane",
//         age: 22,
//         country: "UK"
//     }   
// ];
// console.log(user);
// let users = user.find((elem) => {
//     return elem.name === "Saurabh";
// });
// console.log(users);

// const exer = arr1.forEach((elem) => {
// console.log(elem * 2);
    
// });



const arr2 = arr.filter((elem) => {
    return elem % 2 === 0; // Filter even numbers
});
console.log(arr2);

// REduce data
 const arr3 = arr.reduce((acc, elem) => {
    return acc + elem;   
}, 0);
console.log(arr3);

console.log(a);

// //undefined variable
// var a ;

// // cannot access before declaration
// // let a ;

// //Missing initializer in const declaration
// const b ;

a =10;
console.log(a);
var a;

function test(a, b) {
   
    sum = a+b;
    
}
test(5, 10); // Calling the function with arguments

