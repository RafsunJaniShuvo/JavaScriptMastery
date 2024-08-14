// class person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     test(){
//         console.log('Rafsun Jani shuvo');
//     }
// }
// person.prototype.getFullName = function(){
//     return this.name;
// }
// let obj1 = new person('Rafsun', 26);
// obj1.__proto__.getAge = function(){
//     return this.age;
// }
// let obj2 = new person("Noman",27);
// console.log(obj2.getFullName(),obj2.getAge());




function Person(name,age,address){
    console.log(this);

    this.name = name ;
    this.age = age,
    this.address = address,
    this.getName = function(){
        console.log(`My name is ${this.name}. I am `)
    }
}

Person.prototype.getAddress = function(){
    return this.age;
}

let obj1 = new Person("Rafsun", 26, 'Mirpur')

obj1.name = 'Rafsun Jani Shuvo';
Object.defineProperty(obj1 , 'name' , {value: 'Rafsun Jani Shuvo'});
console.log(obj1.name,111)
