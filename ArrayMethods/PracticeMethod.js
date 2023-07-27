var s1=[10,20,'s',30,40,'d',100]

var a=function(num){
    return num>20
}
let a1=s1.filter(a)
console.log(a1);

var s1=[10,20,'s',30,40,'d',100]
var a=s1.map((num)=>{return num*2})
console.log(a);
