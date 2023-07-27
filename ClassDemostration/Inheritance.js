 class Student{
    static d=20
    constructor(sid,sname,add){
        this.sid=sid
        this.sname=sname
        this.add=add
        
    }    
 display(){
        console.log(this.sid);
        console.log(this.sname);
        console.log(this.add);
    }

}
// var a1=new Student(111,'dinga','basavanagudi')
// a1.display()



class Register extends Student
{
    constructor(sid,sname,add,rID,rName){
 super(sid,sname,add);
   this.rID=rID
   this.rName=rName
    }
     dis(){
       console.log(this.sid,this.sname,this.add,this.rID,this.rName)
    }

}

let e=new Register('Penga','btm',"bangalore",123, "hr")
e.dis();
e.display();

