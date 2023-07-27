class Student{
    constructor(sid,sname){
        this.sid=sid
        this.sname=sname
    }
}

let a=Object.create(Student)
a.sid=111
a.sname='jack'
a.add='kengeri'//adding
//console.log(a);
 
module.exports=a