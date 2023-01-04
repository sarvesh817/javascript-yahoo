//let,var,const

//Note:- Let and const are came in javascript Es6 version in 2015.

//1)var
//you can re-declare a variable.
//you can re-assign the value.
//Global scope - outside the curlybraces of IF statement variable you can use.
//example:-
var x="hello world";
var x="test";  //you can
x="Demo";      //you can
console.log(x);

//2)Let
//you can't re-declare a variable.
//you can re-assign the value.
//Block scope - outside the curlybraces of IF statement variable you can't use.
//example:-
let x="hello world";
let x="test";   //you can't
x="Demo";       //you can re-assign
console.log(x);


//3)const
//you can't re-declare a variable.
//you can't re-assign the value.
//Block scope  - outside the curlybraces of IF statement variable you can't use.
//example:-
const x="hello world";
const x="test";   //you can't
x="Demo";       //you can't re-assign   
console.log(x);     




