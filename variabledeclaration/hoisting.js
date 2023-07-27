

//console.log(a);


//console.log(a)
//a is not defined

//console.log(a)
//let a
//ReferenceError: Cannot access 'a' before initialization

//console.log(a)
//var a
//undefind


//here only the declaration part will moved to top for that we get before initialization error  
//console.log(a);
//let a=10

//every time only declaration part will moved to top
//ex 
//console.log(a);
//let a ==> this line code will available before the usage (before the 24th line) 


//function hoisting

// let a=sachi("abc",10)
// console.log(a);
// function sachi( a, b){
// console.log("new function");
// return a+b
// }

//here ww will get NaN (NotANumber) why bcz in this function we are using two formal argument but we are passing only one actual argument
// object(10,20)
// function object(a,b) {
//    // console.log("new function");
//    console.log(a+b);
    
// }
case1(10)
function case1(a,b) {
   //console.log("new");
   console.log(a+b);
}

 