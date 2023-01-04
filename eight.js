//Destructuring object

//old way
/* let user={
    name:"ram kumar",
    age:25
};
console.log(user.name); */
 

//new way
let user={
    name:"ram kumar",
    age:25
};
//it's mandatory that inside braces name should be same otherwise u will not able to use it.
let {name,age}=user;
console.log(name);  
console.log(age); 

//also we can give aliases name 
let {name:n,age:ag}=user;
console.log(n);