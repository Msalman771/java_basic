const course ={
    name: "javascript",
    price: 1000,
   courseInstructor: "John Doe"
}
// let value = course.name;
// console.log(value);

const {courseInstructor: instructor, name: courseName} = course;
console.log(instructor);
console.log(courseName);


let array = ["javascript", "python", "java"];
const [first,second,third] = array;
console.log(first);
console.log(second);
console.log(third);