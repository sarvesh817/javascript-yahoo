//Spread Operator

//Any array values to convert and as arguments pass

function sum(name,...args){
    let sum=0;
    for(let i in args){
        sum+=args[i];     
    }
    console.log(sum); 
}

var arr=[10,20,30];
//calling time as array passing  
sum("ram",...arr);


//1)In rest we don't pass ... (3dot) in calling time.
//2)But we pass in the Spread operator so this is main difference in both.
//we can also use spread operator with objects.
