//Async and Await

//Async work same as promise.
//Asunc has came in 2017 it's made bcz in promise has issue like each time we need declare resolve and rejection function so calling of this then and catch call work so.
//it has complications too much so for this solution in updated version async has came.

//its easy to make and read.
//await is helpful for api case when some is calling and taking processing or time that time await is mostly used.  

//Async arrow functions written like this.    

//const foo = async () => {
  // do something
//}


/* 
 async function ram(){
    return "Hello";
}

ram().then((result) =>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}); */

//2nd example

async function ram(){
    console.log("2");
   await console.log("3");
    console.log("4");
}

console.log("1");
ram();
console.log("5");

//output:-
//1 
//2
//3
//5
//4

