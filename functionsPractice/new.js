var a=10
let b=20
const c=30
console.log(a+":"+b+":"+c);
console.log("======");
function demo(){
    var l=100
    let m=200
    const n=300
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(l);
    console.log(m);
    console.log(n);
    {
      var i=110
      let j=220
      const k=330
      console.log("#####");
      console.log(l);
      console.log(m);
      console.log(n);
    //   console.log(i);
    //   console.log(j);
    //   console.log(k);
    }
    console.log("-----");
    console.log(i);
   // console.log(j);
    //console.log(k);  //These variables we can not use here why bcz the scope the variables are limited to the block where it is declared
}
demo()
//console.log(l);
// console.log(m);  //These variables we can not use here why bcz the scope the variables are limited to the block where it is declared
// console.log(n);
console.log("======");


{
    var x=0.1
    let y=0.2
    const z=0.3
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(x);
    console.log(y);
    console.log(z);
 

}
 console.log(x);
// console.log(y);  //These variables we can not use here why bcz the scope the variables are limited to the block where it is declared
// console.log(z);