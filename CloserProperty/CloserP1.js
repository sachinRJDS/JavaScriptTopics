function outer(params) {
    let a=10
    console.log("invoking");
    function inner(params) {
        console.log(a++);
    }
    return inner
}
let fun1=outer()
//console.log(fun);
fun1()
fun1()
let fun2=outer()
fun2()
fun2()