// let car = ["BMW","audi","lexus","honda"]
// let animals = ["horse","lion","donkey","dog"]
// let new1 = animals.copyWithin(0,2)
// console.log(new1);


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


// let num = [1,2,3,4, [5,6,7,8, [9,10]]]
// console.log(num);
// console.log(num[4][4][1]);

// now used split method for removing inside the arrays to become the one array of all
// let num2 = num.flat(2)
// console.log(num2);

// let score1 = 100
// let score2 = 200
// let score3 = 300 
// let name = "salman"
// // console.log(Array.isArray(score1));
// let name1 = name.constructor;
// // console.log(name1);


// now with help of of method we can create array from the different variable
// console.log(Array.from(name));
// console.log(Array.isArray(name));

// console.log(Array.of(score1,score2,score3));

// let name =["salman","rehan","zeeshan"]
// let list = name.entries();
// let text = "";
// for (let x of list){
//     text += x
// }
// console.log(text);


// let ages =[12,23,21,13,15]
// function checkage(age){
//     return age > 18;
// }
// let result =ages.every(checkage)
// // console.log(ages);
// console.log(result);

// let name1 = ["salman","khan","rehan",["acha ","bacha"]]
// console.log(name1);
// console.log(name1.flat());
// let join = name1.join()
// console.log(typeof join);
// // // console.log(name1);
// let fruits = Array.of("Banana", "Orange", "Apple", "Mango");
// console.log(fruits);

// let fruit = Array.from("abcde")
// // Array.from(fruit)
// console.log(fruit);
// class car{
//     constructor(brand){
//         this.carname=brand;
//     }
// }
// let mycar = new car("ford")
// console.log(mycar);

// const person = {
//     fullName :function(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// const person1 = {
//     firstName:"salman",
//     lastName: "khan",
// }
// let name1 = person.fullName.apply(person1)
// let day = 3

// let array = []
// array.push("bmw")

// array.push("audi")
// console.log(array);
// array.shift()
// console.log(array);
// array.unshift("honda")
// console.log(array);

// let age = 14;

// if (age >= 18){
//     console.log("adult");
//     }
//     else if(age >= 13 && age <= 17){
//         console.log("teenager");   
//     }
//     else{
//         console.log("child");
        
//     }
// let isLoggedIn = true;
// let isAdmin = false;
// let hasPermission = true;
// if (!isLoggedIn){
//     console.log("please login");
    
// }
// else if(isAdmin){
//     console.log("welcome admin");
    
// }
// else if(hasPermission){
//     console.log("welcome user");
    
// }
// else{
//     console.log("access denied");
// }

// let marks = 85;
// let attendance = 75;
// if (marks >=80 && attendance >= 75){
//     console.log("grade A");
// }
// else if( marks >= 60 && attendance >= 75){
//     console.log("Grade B");
    
// }
// else if (marks >= 50 && marks > 70 && attendance >=75){
//     console.log("grade C");
    
// }
// else{
//     console.log("fail");
    
// }

// let isLoggedIn = true;
// let isAdmin = false;
// let hasSpecialPass = true;

// if (!isLoggedIn){
//     console.log("please login");
// }
// else if(isAdmin){
//     console.log("Admin Access");
    
// }
// else if(hasSpecialPass){
//     console.log("has special pass");
    
// }
// else {
//     console.log("access denied");
    
// }

// let total = 12000;
// let isMember = true;
// if(total >= 10000 && isMember == true){
//     console.log("Discount 20%");
    
// }
// else if (total >= 10000 || isMember == true){
//     console.log("10% Discount");
    
// }
// else{
//     console.log("no discount");
    
// }
// let age = 22;
// let hasID = true;
// let hasTicket = false;
// if(age > 18 && hasID == true && hasTicket == true){
//     console.log("Entry alowed");
    
// }
// else if(age > 18 && hasID == true && hasTicket == false){
//     console.log("Buy Ticket");
    
// }
// else if(age > 18 && hasID == false ){
//     console.log("Id required");
    
// }
// else{
//     console.log("not allowed");
    
// // }
// let age = 20;
// let hasID = true;
// let isVIP = true;
// if(age > 18 && hasID == true){
//     console.log("Regular access");
// }
// else if(age > 18 && ( hasID == true && isVIP == true)){
//     console.log("Access Granted");
    
// }
// else{
//     console.log("Access granted");
    
// }   
// let age = 2;
// let hasLicense = false;
// if(age >= 18){
//     if(hasLicense == true){
//         console.log("you can drive");
//     }
//     else{
//         console.log("Licence required");
        
//     }
// }
// else{
//     console.log("too young");
    
// }

// let age = 25;
// let hasID = true;
// let hasTicket = false;
// if(age >=18){
//     if(!hasID){
//         console.log("Id required");
//     }
//     else{
//         if(hasTicket == true){
//         console.log("entry allowed");
        
//     }
//     else{
//         console.log("ticket required");
       
//     }
//     }
//     }
// else{
//     console.log("too young");
    
// }
// let age = 25;

// let email = "salman@gmail.com";
// let isLoggedIn = true;
// if(isLoggedIn == true && email.includes("@")){
//     console.log("email valid");
    
// }
// else{
//     console.log("emai invalid");
    
// }
// let UserName = "    SALMAN   "


// let username = UserName.toLowerCase()
// let usertrim= username.trim()
// console.log(usertrim);

// if (usertrim == "salman"){
//     console.log("welcome salman");
    
// }
// else{
//     console.log("not found");
    
// }
// let message = "I love JavaScript";

// // let message1 = message.includes("JavaScript")
// // console.log(message1);
// // let 
// if (message.toLowerCase().includes("javascript")){
//     console.log(`${message}`);
// }
// else{
//     console.log("not found");
    
// }