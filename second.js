//Template String or Template Literals

//we don't need again and again concatenation symbol
//So, just user BackTik and under  braces names is called as template literals.
//in template Literals if you give space then it also show that space and another feature of template liters.

let user="Yahoo Baba Tech";
let age=50;
console.log(`this is ${user} he tell about js and               his age is ${age}`);


//T.L use case with functions
let fname ="ram";
let lname ="kumar";

function data(fname,lname){
    return `Fname is ${fname} and lname is ${lname}`;
}     

let hello=`Hello ${data(fname,lname)}`;
console.log(hello);