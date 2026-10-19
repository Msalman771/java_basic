// // A Function Can Be Used Many Times
// // A big benefit is that you can call the same function whenever you need it.
// function greet(){
//     return "hello sir"
// }
// let message = greet();
// // below both ways are right if you store function in the vrable or direct call thought console.log

// // console.log(message);
// console.log(greet());


// function multiply(a,b){
//     return a*b;
// }
// let mul = multiply(10,5);
// console.log(mul);


// // call function many time

// function add(a,b){
//     return a+b;
// }
// let sum1 = add(15,23)
// let sum2 = add(10,20)
// console.log(`the first sum is equal to ${sum1} and the second one is ${sum2}`);
// // using block scope concept in this function
// function add(a,b)// add 2 parameter to the function
// {  // inside the curly braces is called function code
//     let sum = a+b;
//     console.log(sum);

// }
// add(12 , 3 ,12)//add two arguments 

// // convert fahrenheit to celcius
// function tocelcius(fahrenheit){
//     return (5/9) * (fahrenheit-32);
// }

// let value = tocelcius(87)
// console.log(value);

// // call the funcion itself not the vlaue so we easily not used the parenthesis with function naem
// let value2 = tocelcius;
// console.log(value2);



// //  calling vs refrensing function


// // using default values if no arguments is provide
// function def(a,b=10) // b=10 is default value
// {
//     return a+b;
// }
// let defvalue = def(10)
// console.log(defvalue);


// // return values ko is function kai trough samjatai hai

// function ret(a,b){
//     return a+b;
// }
// let valueret = ret(2,3)*10
// console.log(valueret);


function multi(a, b) {
    // console.log(a+b);
    let x = a + b
    // console.log(x);

    return "done"

}
let value = multi(10, 20)
// console.log(value); 


function checkage(age) {
    if (age < 18) {
        return "too young"
    }
    return "adult"
}

let value1 = checkage(18)
// console.log(value1);
function addtwonumber(a, b) {
    const result = a + b
    return result

}
// console.log(addtwonumber(10,10));


function user(username) {
    if (!username) {
        // console.log("user is undefined");
        return
    }
    return `${username} logged in`
}
const result = user("")
// console.log(result);

function multiplearguments(...num2) {
    // return console.log(num2); // return muliplre value through one paramenter shred

}

multiplearguments(100, 200, 300)

const user2 = {
    name: "salman",
    price: 10
}

function calculateCartPrice(anyobject) {
    // console.log(`in this function we used the concept of passing value from the object`)
    // return console.log(`the user name is ${anyobject.name} and the price is ${anyobject.price}`)

}

// console.log(calculateCartPrice(100,200,30))
// console.log(calculateCartPrice(user2));

const myarray = [12, 23, 21, 11, 22, 100]

function storearrayvalue(array) {

    return array[3]

}
// console.log(storearrayvalue(myarray));


// one way to decalare function and console the log any where we want matlab from top of function
function addone(num1) {
    return num1 + 2
}
// console.log(addone(5));


// 2nd way to declare the function but when we console the function top of the function declaration they give us error
// console.log(add2(6)); 

const add2 = function (num1) {
    return num1 + 2
}
// console.log(add2(6)); 

const username ={
    name : "salman",
    price : 999,
    welcomemessage: function(){
        console.log( `${this.name} welcome to website`);
        
          console.log(this)
        
    }
  
}

// console.log(username.welcomemessage());
// username.name  = "rehan";
// console.log(username.welcomemessage());
function name(){
    // console.log(this);
    
}
name()
// one way to right arrow function
const tea = () => {
    // console.log(this);
    
}
tea()
// 2nd way to right function
const one = (num1) => num1 + 2 
// console.log(one(10));

// 3rd way to tight function  

const one2 = (num2) => (num2 + 10 );

// console.log(one2(20));


(function (){
    // console.log(`iife concept`);
    
})();

((value3) => {
    // console.log(value3);
    
})(' sql');

// const arrow = () =>{
//     console.log(`arrow function`);
    
// }
// arrow()

// (function one(){
//     console.log(`iife function`);
    
// })();
// ((name)=>{
//     console.log(`2nd iife function ${name}`);
    
// })(" IIFE ")

// const object = {}

// if (Object.entries(object).length === 0){
//     console.log("object is empthy");
    
// }

// const user1 = []
// if (user1.length === 0){
//     console.log("array is empthy");
    
// }

// // nullish concept
// let name1;
// name1 = 10 ?? 20
// console.log(name1);


// console.log(name1 ?? "Guest");

// const iceprice = 100;
// iceprice <= 80 ? console.log("less the 80") : console.log("greter then 80");

const month = "aprail"
switch (month) {
    case "january":
        console.log("january");
        break;

    case "febuary":
        console.log("febuary");
        break;
    case "march":
        console.log("march");
        break;
    case "aprail":
        console.log("aprail");
        break;
    default:
        console.log("month is not available");
        break;

}