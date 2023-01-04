//strict mode

//when we code in javascript that normally we don't see those errors and also not error came in browser.
//so for help to rectify those issues  we use in js before code in begining mentioned like - "use strict"

//Example 1:-
a=10;

console.log(10);

//you will run it will not show error but it has error like we have not given variables type like var,let,const.
//so these types of syntex error we use "use strict" as solution of this problem.

//2nd Example:-
"use strict";

function test(a,b,b)
{
    console.log(a+b+b);
    //output showing :- 70
}

test(10,20,30);

/* Ans is below of this issue */

"use strict";

function test(a,b,c)
{
    console.log(a+b+c);
    //Now output showing :- 60    
}

test(10,20,30);   

//1)it should display result - 60 but it will print 70 so that is the issue so that type of syntex error we stict mode. 
//2)
//Note:- But you will use use strict mode then it will display error of it is - duplicate parameter name not allowed in this context.

//3) So, therefore always before start code of js use strict mode then code write.  
