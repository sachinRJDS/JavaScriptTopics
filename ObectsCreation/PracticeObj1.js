function student(sid,name,sal){
    this.sid=sid
    this.name=name
    this.sal=sal
}
let a=new student(102,'Dinga',25000)
console.log(a.sid);
delete a.sid     //we cal also delete the states in the object
console.log(a.sid);
a.address='basavanagudi'//we can also add the new states to the object
console.log(a.address);

