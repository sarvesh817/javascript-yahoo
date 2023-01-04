//Symbols

//Javascript datetypes are:-

var x="hello";                 //string                 
var x=25;                      //Number 
var x=true;                    //Boolean
var x=["html","css"];          //Array 
var x={first_name:"Ram",last_name:"kumar"}; //object
var x=null;                    //null   
var x;                         //undefined   


//New Data type
//it takes numeric or also string type values both.
//So, we can x data below is Symbol.
//Symbol mean - Unique value.
var x = Symbol();                //Synmbol



//for example:-
let data1=Symbol("Hello");
let data2=Symbol("Hello");

if(data1==data2){
    console.log("Both are matching");
}else{
    console.log("Both are not matching");
}


//output :- Both are not matching     //Note:- Bcz it's consider of both (unique values) 

//if we console of Symbol var then it will call but you want to show on browser it will not print so for that you will  have to 
//use   ex:-  alert(data1.toString());  //by this way Synbols value we can see  but for see exact just only value then type alert(data1.description);

//imp:- when we shall convert object to json data then Symbol type value it will skip and it keep in hidden form so  and for solution you have to convert that value in string then it will do like alert(data1.description); and 
//  denote ike [age] :25 


