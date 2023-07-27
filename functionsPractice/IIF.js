( function add(a,b){
return a+b
})
let a=(10,10)


//(10,20)
//In this function we should invoke immeadiatly after the block
// we can not invoke this function multiple times ,if we try to invoke we will get (TypeError: (intermediate value)(...) is not a function)
//We can create IIF only once in throught the file

let x=(function add(a,b){
    console.log(a+b);
    return a+b
    })
   (10,10)
   console.log(x);
 

