const user = {
  
    name: "Saurabh",
    age: 21,
    country: "India",
  
  
    name: "John",
    age: 25,
    country: "USA",
  
  
    name: "Jane",
    age: 22,
    country: "UK",
  
};
console.log(Object.keys(user)); // Get keys of the first object
console.log(Object.values(user)); // Get values of the first object
console.log(Object.entries(user)); // Get key-value pairs of the first object
console.log(Object.entries(user).flat()); 
console.log(Object.assign({}, user)); // Create a shallow copy of the object

console.log(Object.freeze(user));
console.log(Object.isFrozen(user)); // Check if the object is frozen


const json = '{"name":"Ali","age":25}';
const obj = JSON.parse(json);
console.log(obj.name); // "Ali"

let arr5 = [1, 2, 3, 4, 5];
let [a,b,c,d] = arr5;
console.log(a, b, c, d); // 1 2 3 4

// speread operator
let arr7 = [...arr5, 6, 7, 8];  
console.log(arr7); // [1, 2, 3, 4, 5, 6, 7, 8]
