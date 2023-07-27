class student{
constructor(sid,sname,section){
    this.sid=sid
    this.sname=sname
    this.section=section
}
}
var a=new student(111,'jack','A-Section')
console.log(this.sid);
