//Promise.all
 


 
let p1=new Promise(function(resolve,reject){
       setTimeout(()=>{
        console.log("First promise");
               resolve(10);
       },1000);  
   });

 
let p2=new Promise(function(resolve,reject){
    setTimeout(()=>{
     console.log("Second promise");  
            resolve(20);
    },2000); 
});

let p3=new Promise(function(resolve,reject){
    setTimeout(()=>{
     console.log("Third promise");  
            resolve(30);
    },3000); 
});

//now
Promise.all([p1,p2,p3]).then((result)=>{
    console.log(`result is :- ${result}`);
}).catch((error) =>{
    console.log(`Error is :- ${error}`);      
});

