//Modules

//IMP:-when we shall use script like below that time you have to give type ="module"
//index.html file
//<script type="module" src="./file2.js"> </script>  
//it's used this script in the html file.   

//it is used for from file1 class,properties,methods to another file2 that is possible by Es6 this module feature.

//1)file1.js
//property
 let name="ram kumar";


//method
 function message(){
    console("method call");
}

//class
  class user {

}
export {message,name,user}; 

//-----------------------------------------------------------------------------------------------------------

//2)file2.js
//before using you just import that one like below

import {name,message,user} from './file1.js';
//or for all need to just put * like below

import * as yahoo from './file1.js';  





//like below are using from file1 data to file2 file.
console.log(name);   
hello();
//we can also make an object
let a=new user();

