class Emp{
    constructor(sid,name,salary){
        this.sid=sid
        this.name=name
        this.salary=salary
    }
}
let a=new Emp(100,'sachin',function(){return 50000})
console.log(a.sid);
s=a.salary()
console.log(s);