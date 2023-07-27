var Student1={
    sid:111,
    sname:'jack',
    s1details:function(){
        console.log(`student1 details ${this.sid} ${this.sname}`);
    }
}

var Student2={
    sid:222,
    sname:'channa',
    s2details:function(){
        console.log(`student1 details ${this.sid} ${this.sname}`);
    }
}

function newStudent(address){
    console.log(`student1 details ${address} ${this.sid} ${this.sname}`);
}

//Student1.s1details.call(Student2)
//newStudent.call(Student1,['kengeri'])
let a=newStudent.bind(Student1)
a()
