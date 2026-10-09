const person = function(fullname,age,id){
    this.fullname = fullname;
    this.age = age;
    this.id = id;
    this.value = function(){
        return this.fullname + " " + this.age + " " + this.id + " " + this.nationality;
    }
}
let father = new person("ismail",45,1111);
let brother = new person("zeeshan",20,2222);
person.prototype.nationality = "pakistan";
console.log(father.value());
console.log(Object.keys(father));// return the keys of the object

console.log(brother.value());
brother.age = 30;
console.log(brother.nationality);

// this part is for destructuring the object
// const {fullname:name,age,id} = father;
// console.log(name);
// console.log(age);
// console.log(id);