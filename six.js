//Object Literals

//if you use same property name and same property value than you don't need to write both
//simple just pass one time.

//old way
let fname="ram";
let lname="kumar";

var obj ={
    fname: fname,
    lname: lname,
}
//console.log(obj.fname);

//new way

/* var obj2 ={
    fname,
    lname
}

console.log(obj2.fname); */


//object literals way of 3rd way:-

//old code
/* let obj9={
    name:"ram k",
    show:function(){
        console.log(this.name);
    }
}
console.log(obj9.show()); */

//New code way
 
let obj4={
    name:"ram ji",
    detail(){
        return `name is ${this.name}`;
        //console.log(this.name);     
    }
} 
console.log(obj4['detail']());