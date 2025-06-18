// ARRAY METHOD 
// CREATION OF ARRAY 
const arr = [1,2,3,4,5,6]
console.log(arr);

const arr1 = new Array(1,2,3,4,5,6,7)
console.log(arr1);


let fruits = ["Apple", "Banana", "Mango",10];
fruits.shift();
fruits.unshift("gg");
fruits.pop();
fruits.push("hh");
console.log(fruits);

console.log(arr1.length);

let ispresent = arr1.includes(4);
console.log(ispresent);

console.log(arr1.lastIndexOf(4));

const user = [
    {
        name: "Saurabh",
        age: 21,
        country: "India"
    },
    {
        name: "John",
        age: 25,
        country: "USA"
    },
    {
        name: "Jane",
        age: 22,
        country: "UK"
    }   
];
console.log(user);
let users = user.find((elem) => {
    return elem.name === "Saurabh";
});
console.log(users);

const exer = arr1.forEach((elem) => {
console.log(elem * 2);
    
});
