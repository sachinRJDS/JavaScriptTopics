// var a={
//     sid:111,
//     sname:'dinga',
//     add:'kengeri'
// }
// console.log(a.sid);
// console.log(a.sname);
// console.log(a.add);

// function details(sid,sname,add1){
// this.sid=sid
// this.sname=sname
// this.add1=add1
// }
// var a=new details(111,'sheela','kengeri')
// console.log(a.sid);
// console.log(a.sname);
// console.log(a.add1);

class details{
    constructor(sid,sname,add){
        this.sid=sid
        this.sname=sname
        this.add=add
    }
}
var a=new details(111,'sheela','Bangalore')
console.log(a.sid);
console.log(a.sname);
console.log(a.add);