//Promise

//1)Resolve         2)Reject 
//then()              catch()

//let prom=new promise();
function prom(complete){
     return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(complete){
                resolve();
            }else{
                reject();
            }
        },3000) 
    });
}


 

  prom(false).then((result)=>{
    console.log("resolved");
}).catch((error)=>{
    console.log("rejected");  
});