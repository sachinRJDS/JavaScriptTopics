function outer(params) {
    var a=0

    function inner1(params) {

        console.log(++a);
        function inner2(params) {

            console.log(++a);
        }
    return inner2
    }
    return inner1
   
}
let fun=outer()
fun()
let val=fun()
val()
fun()
val()