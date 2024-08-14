// function func(){
//     console.log(this);
// }
// func();


// let object = {
//     fName:"Rafsun Jani",
//     lName:"Shuvo",
//     arr:[1,2,3],
//     fullName(){
//         this.arr.forEach(function(value){
//             console.log(value,this.fName +' ' + this.lName);
//         },this);
//     }
// }
// object.fullName();


let person = {
    fName:"Rafsun Jani ",
    lName:"Shuvo"
}


function test(test){
        console.log(this,test)
}
test.call(person,'MySelf');




