class Student{
    constructor(sid,name,sal,address){
        this.sid=sid
        this.name=name
        this.sal=sal
        this.address=address

    }
}
let s=new Student(101,'madhu',25000,a=()=>{console.log("kengeri")
return 100})
displayDetails()
function displayDetails(){
    console.log(s.sid);
    console.log(s.name);
    console.log(s.sal);
    console.log(s.address());
}