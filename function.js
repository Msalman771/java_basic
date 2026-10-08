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



// arrow function
// let arrow = (a,b) => a+b;
// let arrowvalue = arrow(10,20);
// console.log(arrowvalue);

// let hello = () => "hello sir";
// let value = hello();
// console.log(value);

// calling function with other function
// function sayhello(){
//     console.log("hello sir");
    
// }
// // sayhello();

// function start(){
//     console.log("start");
//     sayhello();
// }
// start();

// function welcome() {
//     console.log("Welcome Salman");
// }

// function begin() {
//     // yahan welcome function ko call karo
//     console.log("Begin function is called");
//     welcome();
// }

// begin();

