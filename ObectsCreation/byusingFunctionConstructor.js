function data(sid,name,salary){
    this.sid=sid
    this.name=name
    this.salary=salary

}

let d=new data(111,'dinga',function(){return 1000})
console.log(d.sid);
console.log(d.name);
let sal=d.salary()
console.log(sal);

//here we are creating the object by using function constructor