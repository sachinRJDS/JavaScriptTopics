function student(sid,name,sal){
    this.sid=sid
    this.name=name
    this.sal=sal
}
let a=new student(101,'kashif',function(){return 25000})
console.log(a.sid);
s=a.sal()
console.log(s);