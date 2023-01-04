//Destructuring Array

//use case :- when we create array then that time need to get the all values so that time will have to write long code to get those values.
//so in ES6 came destructuring array to solve this issue.

//old way
//let user=["ram kumar",25];
//let name=user[0];
//let age =user[1]; 

//new way
//let [name,age]=user;
//console.log(name);  
//console.log(age);  

//it also work on nested array
let user2=["ram kumar",25,["male",25000]];
let [name,age,gender,salary]=user2;
console.log(gender);