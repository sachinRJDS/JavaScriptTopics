function outer() {

    let a=10
     function inner(params) {
        console.log(a);
        return 'Hi'
     }
    return inner
}

let fun=outer() //here the inner function will be overridded ,now here we have a inner()
console.log(fun);//here i am printing the variable fun ,we will get the output as [Function: inner] why bcz it will have the inner function
fun() //here i am calling inner function how means fun variable is holding the inner function ,if i want call inner function we call fun()
//here we are achieving the encapsualtion, how ==>The outer function is holding the inner function if want to use inner function first we need to call outer function else we can not call the inner function
