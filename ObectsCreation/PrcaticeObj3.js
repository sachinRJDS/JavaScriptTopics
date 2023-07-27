class student{
    constructor(sid,name,sal){
        this.sid=sid
        this.name=name
        this.sal=sal
    }
}
let a=new student(101,'dinga',50000)
console.log(a.sid);
delete a.sid
console.log(a.sid);
a.address='kengeri'
console.log(a.address);