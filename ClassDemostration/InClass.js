class Emp{
    constructor(ename,eid,sal){
        this.ename=ename
        this.eid=eid
        this.sal=sal
    }
    display(){
        console.log(this.ename);
        console.log(this.eid);
        console.log(this.sal);
    }
}
let e=new Emp('jack',111,25000)
//e.display()

class Student extends Emp{
    constructor(sname,sid){
        super()
        this.sname=sname
        this.sid=sid
    }
    print(){
        console.log(this.sname);
        console.log(this.sid);
    }
}
let s=new Student('Madhu',222)
 s.print()
// s.display()
module.exports=e