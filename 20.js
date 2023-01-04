//Error- Handling in JS

//try catch block doesn't work in case of (setTimeout) ok.   

//but we can use try catch block inside the setTimeout.


try{
    console.log("start");
    console.log(blabla);
    console.log("end");

}catch(error){
   // console.log("catch part");
    //console.log(error);       
    console.log(error.name);       
    console.log(error.message);       
    console.log(error.stack);       
}

/* types of errors are:- */
//Eval error
//RangeError
//ReferenceError
//SyntaxError
//TypeError
//URIError
//AggregateError  