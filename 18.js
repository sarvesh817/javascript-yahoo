//Generators  :- 2nd part of iterators.

//yield:- pause - code will pause. 
function *test(){
    yield "1st";
    yield "2nd";
    yield "3rd";  
}

let g=test();

//it will show output which is commented below.
g.next(); //1st
g.next(); //2nd  
g.next(); //3rd

