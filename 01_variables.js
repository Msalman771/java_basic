// const accountId = 15401;
// let email = "skk441380@gmail.com"
// var accountPassword = "12344"
// accountCity = "peshawer"

// accountId = 15000node  const ko hum doobara value assign nahi kr saktai

// console.log(accountId);
// console.table([accountId,email,accountPassword,accountCity])

let score = "33ab"
// type is string 
// console.log(typeof(score));
// console.log(score);
// now the type is NaN 
// console.log(typeof score);

// with the help of conversion we can change the string number to numbers
let result = Number(score)
// console.log(result);
// console.log(typeof result);

// but when we write the alphabets with number in quotes its type is number but NaN in real 

// let logedin =  1
// console.log(typeof logedin);
// // convert the number to boolein
// let BooleanIsloggedIn = Boolean(logedin)
// console.log(typeof BooleanIsloggedIn);

// console.log(BooleanIsloggedIn);

//  1  => true , 0  => false
// ""  => false 
// "salman"  => true


// ok tu stack ka andar primitive data store hota hai aur heap ka andar non primitive
// 2nd varaible ke copy de jati hai stack mai aur heap mai data da reference 
// jis ki wajha sa hum actual value mai cahnges krsaktai hai heap kai andar
// non primitive

let user = {
    name: "salman",

    age: 25
}
// console.log(user);

// let user2 = user;
// console.log(user2);

// user2.age = 20;
// console.log(user2);
// console.log(user);


let name = "salman"
let index = 4
// console.log(name);
// console.log(name.at(4));

// console.log(`the charte is in ${index} is ${name.charAt(index)}`);

// console.log(`the cahrater code is ${name.charCodeAt(5)} of the charter s`)

// console.log(name.concat("", index));
// ends method is used where the string ends with the follwing chahter or not
// console.log(name.endsWith("n"));

// include method

let sentence = "the quick brown fox jump over a lzay dog"
let word = "cat"
// console.log(`the word "${word}" ${sentence.includes(word) ? "is" : "is not"} present inside the sentence  `);

// indexOf

// console.log(`the index of fox is ${sentence.indexOf("fox")}`);
// date 
// let date = new Date()
// console.log(date);
// console.log(date.toLocaleString());
// console.log(date.toString());

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
