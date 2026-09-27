let car = ["BMW","audi","lexus","honda"]
let animals = ["horse","lion","donkey","dog"]

// .push kai trough array kai andar doosra array ata hai
// car.push(animals)
// console.log(car);
// is tarah hum array kai andar array sai value access kr saktai hai
// console.log(car[4][1]);

// yei doosra tareqa hai array ko merge krna kai
// let com = car.concat(animals)
// console.log(com);

// aur yea teesra tareeqa hai spread operator same sa concat

// let allarray  = [...car,...animals]
// console.log(allarray);


let num = [1,2,3,4, [5,6,7,8, [9,10]]]
// console.log(num);
// console.log(num[4][4][1]);

// now used split method for removing inside the arrays to become the one array of all
let num2 = num.flat(2)
// console.log(num2);

let score1 = 100
let score2 = 200
let score3 = 300 
let name = "salman"
console.log(Array.isArray(score1));

// now with help of of method we can create array from the different variable
console.log(Array.from(name));
// console.log(Array.isArray(name));

console.log(Array.of(score1,score2,score3));
