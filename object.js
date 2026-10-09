// ssimple object
// const person ={ 
//     name:"salman",
//     age:25,
//     id:5543,

// }
// console.log(person.name);

// empty object

// const emp={}
// emp.firstname="muhammad";
// emp.lastname="salman";
// emp.age=25;
// console.log(`the first name is ${emp.firstname} and the last name is ${emp.lastname}`);
// console.log(emp);

// const person= {
//     firstname:"muhammad",
//     lastname:"salman",
//     age:25,
//     fullname:function(){ //property of object is function so we can call it method
//         return this.firstname + " " + this.lastname; // this refer to the current object
//     }
// }
// console.log(person.fullname());

// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   age      :  50
// };
// // update the value of age property
// person.age = 20;
// console.log(person);


// //add new proerty to the object
// person.nationality = "pakistani";
// console.log(person);

// //delete the property of object
// delete person.age;
// console.log(person)

// console.log("age " in person);// check the property is exist or not in object

// myObj = {
//   name:"John",
//   age:30,
//   myCars: {
//     car1:"Ford",
//     car2:"BMW",
//     car3:"Fiat"
//   }
// }

// myObj.myCars.car3 = "Toyota";// update the value of car3 property
// let value = myObj.myCars.car3;// get the value of car3 property
// delete myObj.myCars.car2;// delete the car2 property
// console.log(value,myObj);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   fullName: function() {
//     return( this.firstName + " " + this.lastName).toUpperCase();
//   }
// };
// console.log(person.fullName());

// Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// const myarray = Object.values(person);// get the values of the object and store in array
// console.log(myarray);

//json.stringify() method converts a JavaScript object or value to a JSON string.

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// let value = JSON.stringify(person);// convert the object to json string
// console.log(value);

// const car =  {
//   name: "Ford",
//   model: "Mustang",
//   year: 1964}

//   const value2 = JSON.stringify(car);// convert the object to json string
//   console.log(value2)

// function person(name,age,city,nationality)
// {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.nationality = nationality;
//         this.value = function(){
//             return this.name + " " + this.age + " " + this.city + " " + this.nationality;
//         }
//         this.keys = function(){
//             return this.name + " " + this.age + " " + this.city;
//         }
// }
// let father = new person("ismail",45,"karachi", "pakistan");
// let brother = new person("zeeshan",20,"karachi");
// let sister = new person("sana",15,"karachi");
// console.log(father.value());
// console.log(Object.keys(father));
// console.log(Object.entries(father));
// console.log(brother.name);

// let sym = Symbol("id");
// function person(name,age,city,nationality){
//     this.name = name;
//     this[sym] = 1234;
// this.age = age;
// this.city = city;
// this.nationality = nationality;

// }
// let value = typeof sym;
// console.log(value);
// let father = new person("ismail",45,"karachi", "pakistan");
// console.log(father["name"]);
// console.log(father[sym]);
// console.log(Object.values(father));


// let sym = Symbol("id");
// function person(name,age,city,nationality){
//     this.name = name;
//     this[sym] = 1234;
// this.age = age;
// this.city = city;
// this.nationality = nationality;
// this.value = function(){
//     return this.name + " " + this.age + " " + this.city + " " + this.nationality;

// }
// }
// let father = new person("ismail",45,"karachi", "pakistan");
// console.log(father.value());
// console.log(Object.keys(father));
// console.log(Object.entries(father));