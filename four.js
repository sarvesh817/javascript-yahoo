//Rest Operator

//1)it doesn't support or working for 3 or more arguments
/* function sum(num1,num2){
    console.log(num1+num2); 
}

sum(20,30,20); */

//2)Before Es6 has already solution which is below like example
//use case - But problem is that it doesn't work with string values.
/* function sum(){

    let sum=0;
    for(let i in arguments){
        sum+=arguments[i];     
    }
    console.log(sum);  
}
sum(20,30,20,70); */

//sum("ram",50,20);  //it doesn't work so then Rest operator came in ES6

//::Rest Operator works with string values
//Rest parameter must be last parameter

function sum(name,course,...args){
console.log(`hello ${name} your course is ${course}` );
    let sum=0;
        for(let i in args){
            sum+=args[i];     
        }
        console.log(sum); 
}

sum("ram kumar","mca",10,20);