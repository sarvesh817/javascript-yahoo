//iterators

//Used for iterate or can say we have complete control using iterators else we use loops their we don't have control.

var x=["orange","apple","Banana"];
let y=x[Symbol.iterator]();

y.next();  //1
y.next();  //2
console.log(y.next());  //3  
console.log(y.next().value);  //value print    
 //output :- Banana , done:false
 
 