//Inheritance

//it inherit properties and methods one class to another which is known is inheritance.

class employee{

    constructor (name){
        this.emp_name=name;
        console.log("constructor");
    }

    info(){
        console.log("employee name - "+this.emp_name); 
    }

}

class manager extends employee{


}

let a=new manager("ram kumar");

a.info();