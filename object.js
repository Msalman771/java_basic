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
// let value = myObj.myCars.car3;//
// delete myObj.myCars.car2;// delete the car2 property
// console.log(value,myObj);