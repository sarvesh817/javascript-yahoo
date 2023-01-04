//OOP :- class and object

class hello{
    msg(){
        console.log("message");
    }
}
const obj=new hello();
obj.msg();

//types of methods:-  
//1)constructor   method
constructor(){
    console.log("it invokes auto no need to call");
}

//2)Prototype method 
messag(){  
    console.log("it call with object");
}

//3)static  method
//this method call with class name
static msgs(){  
    console.log("no need to make a object and direct we can call it");  
}


/* Class program example */

class student{
    constructor(name,age){
        this.std_name=name;
        console.log("constuctor function called");

    }
    hello(){
        console.log("Name is "+this.std_name);
    }
    static static_method(){
        console.log("static functoin called");
    }
}

let a =new student("ram",35);
let b =new student("ram",35);
a.hello();
b.hello();
//static method called
student.hello();

