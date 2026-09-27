// array with array methods

let cars = ["BMW","audi","mercades","lexus","porche"]

// let car =cars.slice(1,3)
// console.log(car);
// console.log("No changes occur in orignal array through slice",cars);

// let array2 = cars.splice(1,3)
// console.log(array2);

// console.log("Now you can see the splice method manipulate the original array ",cars);


 // thourg push method we add the value to the array in the last

cars.push("tractor") 
console.log(cars);

// with the help of pop we remove the last value
cars.pop()
console.log(cars);

// with the help of unshift method we add the value to the start
cars.unshift("horse")
console.log(cars);

// witht he help of shift method we remove the first value
cars.shift()
console.log(cars);

// includes method kai through hum maloom kr saktai hai kai value maujood hai ka nahi
let inc = cars.includes("BMW")
console.log(inc);

// through indexof kai yea value hai kai nahi
let ind = cars.indexOf("lexus")
console.log(ind);

// join kai through hum hum array ko string bana sktai hai
let joi = cars.join()
console.log(joi);
